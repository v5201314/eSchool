import React, { Component } from 'react'

import './index.css'
export default class TimeInfo extends Component {
    render() {
        return (
            <div id='timeInfo'>
                <div className='time-top'>
                    <div className='top-1'>
                        <p>光阴值兑换</p>
                        <div className='goExchange'>去兑换 &gt;</div>
                    </div>
                    <div className='top-2'>
                        <p className='timeValue'>889</p>
                        <img src="/icons/能量 拷贝.png" alt="tiom-icon" />
                    </div>
                </div>
                <div className='time-bottom'>
                    <div>
                        <div className='content'>
                            <p>可提现奖励:</p>
                            <p className='Withdrawable'>8.00</p>
                            <p>光阴值</p>
                        </div>
                    </div>
                    <div>
                        <div className='content'>
                        <p>今日奖励:</p>
                            <p className='Withdrawable'>8.00</p>
                            <p>光阴值</p>
                        </div>
                    </div>
                    <div>
                        <div className='content'>
                        <p>昨日奖励:</p>
                            <p className='Withdrawable'>8.00</p>
                            <p>光阴值</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
