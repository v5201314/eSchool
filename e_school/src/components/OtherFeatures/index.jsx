import React, { Component } from 'react'

import './index.css'
export default class OtherFeatures extends Component {

    //初始化key
    i=0;

    render() {
        const { otherFeatures } = this.props;
        return (
            <div id='otherFeatures'>
                {
                    otherFeatures.map((otherObj) => {
                        return (
                            <div key={this.i++}>
                                <img src={otherObj.src} alt="" />
                                <p>{otherObj.introduce}</p>
                            </div>
                        )
                    })


                }

            </div>
        )
    }
}
