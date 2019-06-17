import React from 'react'
import { SlotMachine } from '../components/slotMachine/index'
import Copy from "../components/copy/copy"
import LayoutWrapper from '../components/layout/layoutWrapper'

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 140px)"
}

export default () => (
  <LayoutWrapper>
    <div style={ wrapperStyle }>
      <SlotMachine />
      <Copy>Too bad — I couldn't find what you were looking for. But maybe luck is on your side.</Copy> 
    </div>
  </LayoutWrapper>
)
