import React from 'react'
import Slot from './slot'
import slotMachineStyles from './slotMachine.module.scss'

const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export default class SlotMachine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSpinning: false,
      jackpot: false
    }

    this.slots = [
        {
          symbols: ['4'],
          evaluation: null
        },
        {
          symbols: ['0'],
          evaluation: null
        },
        {
          symbols: ['4'],
          evaluation: null
        }
    ]

    this.resetTimeout = null

    this.prepare()
  }

  spin() {
    this.setState({ isSpinning: true })
  }

  evaluate(slotIndex, symbol) {
    this.slots[slotIndex].evaluation = symbol

    return this.slots.filter(slot => slot.evaluation === null).length === 0
      ? (this.setState({ jackpot: true }), this.resetTimeout(setTimeout(() => this.reset(), 500)))
      : null
  }

  prepare() {
    this.slots = this.slots.map(slot => 
        ({ ...slot, symbols: [this.getRandomSymbol(), ...slot.symbols, ...this.fillUpSlot(20)] })
    ) 

    this.evaluate(0)
  }

  fillUpSlot(count) {
    return Array.from(Array(count).keys()).reduce((acc) => [...acc, this.getRandomSymbol()], [])
  }

  getRandomSymbol() {
    return symbols[Math.floor(Math.random()*symbols.length)]
  }

  reset() {
    this.setState({
      jackpot: false,
      isSpinning: false
    })

    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout)
    }
  }

  render() {
    return (
      <div className={ slotMachineStyles.slotMachine 
      }>
        {
          this.slots.map((slot, index) => 
            <Slot 
              key={ index } 
              slotIndex={ index }
              spin={ this.state.isSpinning }
              evaluate={ this.evaluate }
              symbols={ slot.symbols } 
            />
          )
        }
      </div>
    )
  }
}
