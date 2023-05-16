import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
export default class CommodityCommon extends Component {
    render() {
        const { commodityCommon } = this.props
        return (
            <div id='commodityCommon'>
                {
                    commodityCommon.map((commodityObj) => {
                        return (
                           
                            <div key={commodityObj.goodsId}>
                                 <Link to={commodityObj.to}>
                                <img src={commodityObj.imgSrc} alt="" />
                                <div className='gdsIntroduce'>
                                    <h3>{commodityObj.classify}</h3>
                                    <p>{commodityObj.goodsName}</p>
                                    <span>{commodityObj.energy}能量</span>
                                </div>
                                </Link>
                            </div>
                          
                        )
                    })
                }
            </div>
        )
    }
}
