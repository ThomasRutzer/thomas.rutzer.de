import React from 'react'
import anime from 'animejs'
import Splitting from 'splitting'

import Title from './title'
import Portrait from './portrait'

export default class Intro extends React.Component {
  constructor(props) {
    super(props)

    this.headline = React.createRef()
    this.main = React.createRef()
    this.subline = React.createRef()
    this.bg = React.createRef()
  }

  componentDidMount() {
    this.main.current.style.opacity = "0"
  }

  async startAnimation() {
    const splittedHeadline = Splitting({
      target: this.headline.current,
    })
    const tl = anime.timeline()

    tl
      .add({
        targets: this.main.current,
        opacity: [0, 1],
        duration: 0
      })
      .add({
        targets: this.bg.current,
        opacity: [0, 1],
        keyframes: [
          { clipPath: 'inset(0)' },
          { clipPath: 'inset(32px)' }
        ],
        duration: 2000,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: this.headline.current,
        opacity: [0, 1],
        duration: 0,
      }, "-=300")
      .add({
        targets: splittedHeadline[0].chars,
        rotate: [20, 0],
        translateY: ['100%', 0],
        opacity: [0, 1],
        duration: 2700,
        delay: anime.stagger(20, {}),
        easing: 'easeInOutExpo',
      }, '-=1200')
      .add({
        targets: this.subline.current,
        opacity: [0, 1],
        'translateY': [20, 0],
        duration: 1000,
        easing: 'easeOutQuad',
      }, '-=1600')


    tl.play()
  }

  render() {
    return (
      <div
        className="relative flex items-center overflow-hidden"
        ref={this.main}>
        <div ref={this.bg} className="intro__bg">
          <Portrait imgPath={this.props.imgPath} onReady={this.startAnimation.bind(this)} />
        </div>
        <div className="min-h-screen flex justify-between flex-col p-6 md:p-7" variant="large">
          <Title ref={this.headline}>
            hay I’m Thomas
              </Title>
          <div ref={this.subline} className="max-w-screen-sm">
            <p className="relative">
              creative developer who feels most comfortable where sophisticated design meets well structured code.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
