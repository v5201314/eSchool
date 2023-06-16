import React, { Component } from 'react'

import './index.css'
export default class Head extends Component {
    
    render() {
        return (
            <div id='Head'>
                <span className='title'>兑换商城</span>
                <div class="shoppingCart-icon">
                    <img src="/icons/购物车.png" alt="" />
                    <span>0</span>
                </div>
            </div>
        )
    }
}
