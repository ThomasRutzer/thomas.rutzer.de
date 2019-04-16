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
    if (this.props.spin) {
      this.startSpinning()
    }

    if(prevProps.symbols !== this.props.symbols) {
      this.reset()
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
      translateY: `${((this.props.symbols.length - 2) / this.props.symbols.length) * 100 * -1}%`,
      duration: 2000,
      easing: 'easeInOutQuad',
      delay: this.props.slotIndex * 100,
      complete: () => {
        this.props.evaluate(
          this.props.slotIndex, 
          this.props.symbols[this.props.symbols.length - 1]
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
