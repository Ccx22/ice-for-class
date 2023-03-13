import React, { Component } from 'react'

export default class Divs extends Component {

    render() {
        const divStyle = {
            width: '100%',
            boxSizing: 'border-box',
            padding: '24px',
            background: '#fff',
            borderRadius: '5px',
            marginBottom:'20px'
        }
        return (
            <div style={divStyle}>{this.props.children}</div>
        )
    }
}
