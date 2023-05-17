import React, { Component } from 'react'

import './index.css'
export default class SearchBox extends Component {
    render() {
        return (
            <div>
                <div className='searchBox1'>
                    <img src="/icons/-e-搜索.png" alt="" />
                    <input type="text" placeholder='请输入关键字' />
                </div>
            </div>
        )
    }
}
