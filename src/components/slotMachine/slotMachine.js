import React from 'react'
import Slot from './slot'
import slotMachineStyles from './slotMachine.module.scss'

const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export default class SlotMachine extends React.Component {
  constructor(props) {
    super(props)

    this.slots = [
        ['4'],
        ['0'],
        ['4']
    ]

    this.prepare()
  }

  prepare() {
    this.slots = this.slots.map(slot => [this.getRandomSymbol(), ...slot, ...this.fillUpSlot(20)]) 
  }

  fillUpSlot(count) {
    return Array.from(Array(count).keys()).reduce((acc) => [...acc, this.getRandomSymbol()], [])
  }

  getRandomSymbol() {
    return symbols[Math.floor(Math.random()*symbols.length)]
  }

  render() {
    return (
      <div className={ slotMachineStyles.slotMachine 
      }>
        {
          this.slots.map((slot, index) => 
            <Slot key={ index } symbols={ this.slots[index] } />
          )
        }
      </div>
    )
  }
}
