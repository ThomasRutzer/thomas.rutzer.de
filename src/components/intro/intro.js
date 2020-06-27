import React from 'react'
import anime from 'animejs'
import Splitting from 'splitting'

import introStyles from './intro.module.scss'

import Title from './title'
import Portrait from './portrait'
import ContentWrapper from "./../layout/contentWrapper"

export default class Intro extends React.Component {
  constructor(props) {
    super(props)

    this.headline = React.createRef()
    this.main = React.createRef()
    this.subline = React.createRef()
    this.bg = React.createRef()
  }

  async componentDidMount() {
    const splittedHeadline = Splitting({
      target: this.headline.current,
    })
    const tl = anime.timeline()

    tl
      .add({
        targets: this.bg.current,
        opacity: [0, 1],
        duration: 1200,
        delay: 700,
        easing: 'easeOutQuad'
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
      })
      .add({
        targets: this.subline.current,
        opacity: [0, 1],
        'translateY': [20, 0],
        duration: 1200,
        easing: 'easeOutQuad',
      }, '-=1200')


    tl.play()
  }

  render() {
    return (
      <div className="relative py-5 min-h-screen flex items-center overflow-hidden">
        <div aria-hidden="true" ref={this.bg} className={introStyles.bg}>
          <Portrait />
        </div>
        <ContentWrapper variant="large">
          <div className="md:grid md:grid-cols-3">
            <div ref={this.main} className="col-start-1 col-span-2">
              <Title ref={this.headline}>
                hay, I'm thomas
              </Title>
              <div ref={this.subline}>
                <h2 className="md:text-4xl">
                  creative developer who feels most comfortable where sophisticated design meets well structured code.
                </h2>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    )
  }
}
