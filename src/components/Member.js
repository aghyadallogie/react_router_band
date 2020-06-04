import React, { Component } from 'react';

export default class Member extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            this.props.data ? (
                <div className="member">
                    <img src="" alt="member" width="600px"></img>
                    <span>{this.props.data.name}</span>
                </div>) : 'loading'
        )
    }
}

