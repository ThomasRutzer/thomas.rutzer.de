import React from "react"
import * as PIXI from "pixi.js"
import displacementMap from "./../../images/displacement.png"

PIXI.utils.skipHello()

class Smear extends React.PureComponent {
  constructor(props) {
    super(props)

    this.app = null
    this.displacementFilter = null
    this.current = 0
    this.brush = null
    this.brushTexture = null
    this.renderTextures = []
    this.bgTexture = null
    this.bg = null
    this.canvas = React.createRef()
  }

  componentDidMount() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: this.canvas.current,
      backgroundColor: 0x7c7c7c
    })

    this.preload()
  }

  componentWillUnmount() {
    this.app.destroy()
  }

  preload() {
    this.app.loader.add("bg", this.props.img)
    this.app.loader.add("brush", displacementMap)
    this.app.loader.load((loader, resources) => {
      this.bgTexture = resources.bg.texture
      this.brushTexture = resources.brush.texture

      this.setup()
      this.props.onReady()
    })
  }

  setup() {
    this.renderTextures.push(
      PIXI.RenderTexture.create(this.app.screen.width, this.app.screen.height),
      PIXI.RenderTexture.create(this.app.screen.width, this.app.screen.height)
    )

    const initBg = new PIXI.Sprite(this.bgTexture)
    const dimensions = getImageDimensionsWithAspect(
      this.bgTexture.baseTexture.width, this.bgTexture.baseTexture.height,
      this.app.screen.width, this.app.screen.height
    )
    initBg.height = dimensions.height
    initBg.width = dimensions.width;

    this.app.renderer.render(initBg, this.renderTextures[0])
    this.bg = new PIXI.Sprite(this.renderTextures[0])

    this.brush = new PIXI.Sprite(this.brushTexture)
    this.brush.anchor.set(0.5)
    this.displacementFilter = new PIXI.filters.DisplacementFilter(this.brush)
    this.app.stage.filters = [this.displacementFilter]
    this.displacementFilter.scale.x = 10
    this.displacementFilter.scale.y = 10

    this.app.stage.addChild(this.bg, this.brush)

    this.app.stage.interactive = true

    this.app.stage.on("pointermove", this.onPointerMove.bind(this))

    this.app.start()
  }

  update() {
    const swapTexture = 1 - this.current
    this.app.renderer.render(
      this.app.stage,
      this.renderTextures[swapTexture]
    )
    this.bg.texture = this.renderTextures[swapTexture]
    this.current = swapTexture
  }

  onPointerMove(event) {
    this.displacementFilter.scale.x =
      Math.atan(event.data.global.x - this.brush.x) * 7
    this.displacementFilter.scale.y =
      Math.atan(event.data.global.y - this.brush.y) * 7

    this.brush.position.copyFrom(event.data.global)
    this.update()
  }

  render() {
    return <canvas style={{ width: "100%" }} ref={this.canvas} />
  }
}

function getImageDimensionsWithAspect(imgW, imgH, containerW, containerH) {
  const imageRatio = imgW / imgH
  const containerRatio = containerW / containerH

  return containerRatio > imageRatio
    ? {
      height: imgH / (imgW / containerW),
      width: containerW
    }
    : {
      width: imgW / (imgH / containerH),
      height: containerH
    }
}

export default Smear