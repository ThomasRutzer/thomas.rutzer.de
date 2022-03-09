import React from "react"
import * as PIXI from "pixi.js"
import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "./../../../tailwind.config"
import displacementMapPath from "./../../images/displacement.png"
import imagePath from "./../../images/me.jpg"

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
    const { theme } = resolveConfig(tailwindConfig)
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: this.canvas.current,
      backgroundColor: theme.colors.grey.darkest,
    })

    this.preload()
  }

  componentWillUnmount() {
    this.app.destroy()
    window.removeEventListener("resize", this.onResize)
  }

  preload() {
    this.app.loader.add("bg", imagePath)
    this.app.loader.add("brush", displacementMapPath)
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
      this.bgTexture.baseTexture.width,
      this.bgTexture.baseTexture.height,
      this.app.screen.width,
      this.app.screen.height
    )
    initBg.height = dimensions.height
    initBg.width = dimensions.width

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
    window.addEventListener("resize", this.onResize.bind(this))

    this.app.start()
  }

  update() {
    const swapTexture = 1 - this.current
    this.app.renderer.render(this.app.stage, this.renderTextures[swapTexture])
    this.bg.texture = this.renderTextures[swapTexture]
    this.current = swapTexture
  }

  onPointerMove(event) {
    this.displacementFilter.scale.x = Math.atan(event.data.global.x - this.brush.x) * 7
    this.displacementFilter.scale.y = Math.atan(event.data.global.y - this.brush.y) * 7

    this.brush.position.copyFrom(event.data.global)
    this.update()
  }

  onResize() {
    if (this.app.renderer) {
      const dimensions = getImageDimensionsWithAspect(
        this.bgTexture.baseTexture.width,
        this.bgTexture.baseTexture.height,
        window.innerWidth,
        window.innerHeight
      )

      this.app.renderer.view.style.width = dimensions.width + "px"
      this.app.renderer.view.style.height = dimensions.height + "px"
    }
  }

  render() {
    return (
      <div className="rounded-xl overflow-hidden w-full h-full">
        <canvas ref={this.canvas} />
      </div>
    )
  }
}

function getImageDimensionsWithAspect(imgW, imgH, containerW, containerH) {
  const imageRatio = imgW / imgH
  const containerRatio = containerW / containerH

  return containerRatio > imageRatio
    ? {
        height: imgH / (imgW / containerW),
        width: containerW,
      }
    : {
        width: imgW / (imgH / containerH),
        height: containerH,
      }
}

export default Smear
