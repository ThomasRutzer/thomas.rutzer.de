import React from 'react'
import anime from 'animejs'
import Splitting from 'splitting'

import introStyles from './intro.module.scss'

import Title from './title'
import SubTitle from './subTitle'
import ExternalLink from './../externalLink/externalLink'
import portraitImagePath from './../../images/me.jpg'
import Image from '../Image/image'
import ContactList from '../contactList/contactList'
import networkAnalyzer from '../networkAnalyzer/networkAnalyzer'

export default class Intro extends React.Component {
  constructor(props) {
    super(props)

    this.headline = React.createRef()
    this.main = React.createRef()
    this.subline = React.createRef()
    this.side = React.createRef()
  }

  async componentDidMount() {
    const splittedHeadline = Splitting({
      target: this.headline.current,
    })

    const tl = anime.timeline()

    tl
    .add({
      targets: this.headline.current,
      opacity: [0, 1],
      duration: 0,
    })
    .add({
      targets: splittedHeadline[0].chars,
      rotate: [20, 0],
      translateY: ['100%', 0],
      opacity: [0, 1],
      duration: 2700,
      delay: anime.stagger(10, {}),
      easing: 'easeInOutExpo',
    })
    .add({
        targets: this.subline.current,
        opacity: [0, 1],
        'translateY': [20, 0 ],
        duration: 1200,
        easing: 'easeOutQuad',
    }, '-=300')
    .add({
        targets: this.side.current,
        opacity: [0, 1],
        'translateY': [60, 0 ],
        duration: 1200,
        easing: 'easeOutQuad'
    },'-=1000')

    tl.play()
  }

  render() {
    const Portrait =
      typeof navigator !== 'undefined'
        ? networkAnalyzer({
            src: portraitImagePath,
            alt: 'Portrait of Thomas Rutzer',
          })(Image)
        : null

    return (
      <div className={introStyles.intro}>
        <div ref={this.main} className={introStyles.main}>
          <Title ref={this.headline}>
            Hay! I am Thomas Rutzer — a creative developer who feels most
            comfortable where sophisticated design meets well structured code.
          </Title>
          <div ref={this.subline} className={introStyles.subline}>
            <SubTitle>
              I currently work at{' '}
              <ExternalLink link={'https://artcom.de'}>art+com</ExternalLink>, a
              studio for media installations and spaces.
            </SubTitle>
          </div>
        </div>
        <div ref={this.side} className={introStyles.side}>
          {Portrait && <Portrait />}
          <ContactList />
        </div>
      </div>
    )
  }
}
