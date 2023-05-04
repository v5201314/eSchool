import React, { Component } from 'react'

import './index.css'
export default class OtherFeatures extends Component {


    render() {
        const { otherFeatures } = this.props;
        return (
            <div id='otherFeatures'>
                {
                    otherFeatures.map((otherObj) => {
                        return (
                            <div>
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
