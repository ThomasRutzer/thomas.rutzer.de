import React from 'react'
import anime from 'animejs'

import slotStyles from './slot.module.scss'
import Symbol from './symbol'

export default class Slot extends React.Component {
  constructor(props) {
    super(props)

    this.$symbols = React.createRef()
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.spin && this.props.spin) {
      this.reset()
      this.startSpinning()
    }
  }

  reset() {
    anime({
      targets: this.$symbols.current,
      translateY: 0,
      duration: 0
    })
  }

  startSpinning() {
    anime({
      targets: this.$symbols.current,
      translateY: `-${(this.$symbols.current.offsetHeight / 3) * (this.props.symbols.length  - 3)}px`,
      duration: 2000,
      easing: 'easeInOutQuad',
      delay: this.props.slotIndex * 500,
      complete: () => {
        this.props.evaluate(
          this.props.slotIndex, 
          this.props.symbols[this.props.symbols.length - 2]
        )
      }
    })
  }

  render() {
    return(
      <div  ref={ this.$symbols }  className={ slotStyles.slot }>
        { this.props.symbols.map((symbol, index) => 
          <Symbol key={ index } symbol={ symbol } />) 
        }
      </div>
    )
  }
}
