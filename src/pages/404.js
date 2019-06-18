import React from 'react'
import { Link } from "gatsby"
import { SlotMachine } from '../components/slotMachine/index'
import Copy from "../components/copy/copy"
import LayoutWrapper from '../components/layout/layoutWrapper'
import ContentWrapper from '../components/layout/contentWrapper'

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 140px)"
}

const horizontalRuleStyle = {
  width: "400px",
  maxWidth: "100%",
  margin: "0 auto",
  opacity: "0.2"
}

const linkStyles = {
  textDecoration: "underline",
  color: '#fff'
}

export default () => (
  <LayoutWrapper>
    <div style={ wrapperStyle }>
      <ContentWrapper mode={ "small" }>
        <Copy center={ true }>Too bad <br></br> — I couldn't find what you were looking for. Go <Link to="/" style={ linkStyles }>home</Link> or try your luck.</Copy> 
        <hr style={ horizontalRuleStyle }></hr>
      </ContentWrapper>
      <SlotMachine />
    </div>
  </LayoutWrapper>
)
