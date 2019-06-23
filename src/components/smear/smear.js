import React from 'react'
import * as PIXI from 'pixi.js'
import displacementMap from './../../images/displacement.png'

PIXI.utils.skipHello()

export default class Smear extends React.PureComponent {
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
    this.app = new PIXI.Application(
     
      
      {
        width:  this.props.initSize[0],
        height: this.props.initSize[1],
        view: this.canvas.current
      }
    )

    this.preload()
  }

  preload() {
    this.app.loader.add('bg', this.props.img)
    this.app.loader.add('brush', displacementMap)
    this.app.loader.load((loader, resources) => {
      this.bgTexture = resources.bg.texture
      this.brushTexture = resources.brush.texture

      this.setup()
    })
  }

  setup() {
    this.renderTextures.push(
      PIXI.RenderTexture.create(this.app.screen.width, this.app.screen.height),
      PIXI.RenderTexture.create(this.app.screen.width, this.app.screen.height),
      PIXI.RenderTexture.create(this.app.screen.width, this.app.screen.height)
    )

    const initBg = new PIXI.Sprite(this.bgTexture)
    initBg.width = this.app.screen.width
    initBg.height = this.app.screen.height

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

    this.app.stage.on('pointermove', this.onPointerMove.bind(this))

    this.app.start()
  }

  update() {
    this.app.renderer.render(
      this.app.stage,
      this.renderTextures[2 - this.current]
    )
    this.bg.texture = this.renderTextures[2 - this.current]
    this.current = 2 - this.current
  }

  onPointerMove(event) {
    this.displacementFilter.scale.x =
      Math.atan(event.data.global.x - this.brush.x) * 7
    this.displacementFilter.scale.y =
      Math.atan(event.data.global.y - this.brush.y) * 7

    this.brush.position.copyFrom(event.data.global)
    this.update(event)
  }

  render() {
    return <canvas style={{ width: '100%' }} ref={this.canvas} />
  }
}
