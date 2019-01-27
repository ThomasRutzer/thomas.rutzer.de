import React from "react"

export default class Headline extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.getClientSize) {
            this.props.getClientSize(
                this.myRef.current.clientWidth,
                this.myRef.current.clientHeight
            )
        }
    }

    render() {
        return <h1 ref={this.myRef}>
            { this.props.children }
        </h1>
    }
}