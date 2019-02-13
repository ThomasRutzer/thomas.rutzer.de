import React from "react"
import externalLinkStyles from "./externalLink.scss"

export default props =>
    <a className="externalLink"
       href={ props.link } target="blank">
        { props.children } 
        <span className="externalLinkIcon">↗</span>
    </a>