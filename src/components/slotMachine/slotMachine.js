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
          symbols: [this.getRandomSymbol(), '4', this.getRandomSymbol()],
          evaluation: null
        },
        {
          symbols: [this.getRandomSymbol(), '0', this.getRandomSymbol()],
          evaluation: null
        },
        {
          symbols: [this.getRandomSymbol(), '4', this.getRandomSymbol()],
          evaluation: null
        }
    ]

    this.resetTimeout = null
    this.prepare(true)
  }

  spin() {
    if (!this.state.isSpinning) {  
      this.setState({ isSpinning: true })
    }
  }

  storeResult(slotIndex, symbol) {
    this.slots[slotIndex].evaluation = symbol

    return this.slots.filter(slot => slot.evaluation === null).length === 0
      ? (this.setState({ jackpot: this.evaluateJackpot() }), this.reset())
      : null
  }

  evaluateJackpot() {
    return this.slots.every(slot => slot.evaluation === this.slots[0].evaluation)
  }

  prepare(initital) {
    this.slots = this.slots.map(slot => {
        const symbols = initital 
          ? [
              ...slot.symbols,
              ...this.fillUpSlot(19)
          ] 
          : [
            ...slot.symbols.slice(slot.symbols.length  - 3, slot.symbols.length),           
            ...this.fillUpSlot(19)
          ] 

        return ({ ...slot, evaluation: null,  symbols })
      }
    ) 
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

    this.prepare(false)

    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout)
    }
  }

  render() {
    return (
      <>
        <div className={ slotMachineStyles.slotMachine }>
          {
            this.slots.map((slot, index) => 
              <Slot 
                key={ index } 
                slotIndex={ index }
                spin={ this.state.isSpinning }
                evaluate={ this.storeResult.bind(this) }
                symbols={ slot.symbols } 
              />
            )
          }
        </div>
        <button onClick={ this.spin.bind(this) } />
      </>
    )
  }
}
