import React from 'react'
import anime from 'animejs'
import Slot from './slot'
import slotMachineStyles from './slotMachine.module.scss'
import PrimaryButton from './../buttons/secondary-button'

const symbols = ['0', '1']
const fillUpAmount = 19

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

    this.prepare(true)
  }

  componentDidMount() {
    this.spin()
  }

  spin() {
    if (!this.state.isSpinning) {  
      this.setState({ isSpinning: true, jackpot: false })
    }
  }

  storeResult(slotIndex, symbol) {
    this.slots[slotIndex].evaluation = symbol

    return this.slots.filter(slot => slot.evaluation === null).length === 0
      ? (this.setState({ isSpinning: false, jackpot: this.evaluateJackpot() }), this.prepare(false))
      : null
  }

  evaluateJackpot() {
    if (this.slots.every(slot => slot.evaluation === this.slots[0].evaluation)) {
      anime({
        targets: document.body,
        duration: 1200,
        keyframes: [
          {filter: "invert(100%)", backgroundColor: "#f8f8f8"},
          {filter: "invert(0%)", backgroundColor: "#2e2d2d"},
          {filter: "invert(100%)", backgroundColor: "#f8f8f8"},
          {filter: "invert(0%)", backgroundColor: "#2e2d2d"}
        ],
        easing: 'easeInOutQuad',
        complete() {
          document.body.removeAttribute("style")
        }
      })
      return true
    } else{
      return false
    }
  }

  prepare(initital) {
    this.slots = this.slots.map(slot => {
        const symbols = !initital 
        ? [
            ...slot.symbols.slice(slot.symbols.length  - 3, slot.symbols.length),           
            ...this.fillUpSlot(fillUpAmount)
          ] 
        : [
          ...this.fillUpSlot(fillUpAmount),
          ...slot.symbols.slice(slot.symbols.length  - 3, slot.symbols.length),           
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

  render() {
    return (
      <div className={ slotMachineStyles.wrapper} aria-hidden={ true }>
        <div className={ slotMachineStyles.slotMachine }>
          {
            this.slots.map((slot, index) => 
              <Slot 
                key={ index } 
                slotIndex={ index }
                spin={ this.state.isSpinning }
                evaluate={ this.storeResult.bind(this) }
                jackpot={ this.state.jackpot }
                symbols={ slot.symbols } 
              />
            )
          }

        </div>
        <div className={ slotMachineStyles.cta }>
          <PrimaryButton 
            disabled={ this.state.isSpinning }
            onClick={ !this.state.isSpinning ? this.spin.bind(this) : null} 
            label={ "Spin to win!"}
          />
        </div>
      </div>
    )
  }
}
