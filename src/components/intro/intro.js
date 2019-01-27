import React from "react"
import anime from "animejs"

import typographySettings from "./../../utils/typography"
import introStyles from "./intro.module.css"

import Headline from "./../headline"
import Sword from "./sword"

export default class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasSize: {w: null, h: null}
        }
    }

    canvasSize(w, h) {
        this.setState({
            canvasSize: { w, h }
        })
    }

    render() {
        return <div className={ introStyles.intro }>
            <Headline
                getClientSize={ this.canvasSize.bind(this) }
            >
            Thomas Rutzer is a creative developer, who feels most comfortable where
            sophisticated design meets well structured code.
            </Headline>
            <Sword
            />
        </div>
    }
}