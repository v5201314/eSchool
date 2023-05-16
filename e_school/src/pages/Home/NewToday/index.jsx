import React, { Component } from 'react'

import './index.css'
export default class NewToday extends Component {
    render() {
        return (
            <div id='newToday'>
                <span>今日上新</span>
                <div className='goods'>
                    <img src="/images/-e-图层 8.png" alt="" />
                    <div className='introduce'>
                        <p>香港梦乐专业护脊减负儿童书包</p>
                        <div>
                            <img src="/icons/能量.png" alt="" />
                            <span>1500</span>
                            <p className='heat'>1.0w人已兑换</p>
                        </div>
                        <span className='goLook'>详情查看 &gt;</span>
                    </div>
                </div>
            </div>
        )
    }
}
