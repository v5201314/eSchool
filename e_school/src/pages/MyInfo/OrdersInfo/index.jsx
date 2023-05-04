import React, { Component } from 'react'

import './index.css'
export default class OrdersInfo extends Component {
    render() {
         //获取父组件传递过来的用户订单信息
         const { ordersInfo } = this.props
        return (
            <div id='ordersInfo'>
                <div className='shoppingCart'>
                    <div className='shoppingCart-icon'>
                        <img src="/icons/购物车.png" alt="" />
                        <span>{ordersInfo.shoppingCart}</span>
                    </div>
                    <p>购物车</p>
                </div>
                <div className='ordersFalse'>
                    <div>
                        <img src="/icons/形状 42.png" alt="" />
                        <span>{ordersInfo.ordersFalse}</span>
                    </div>
                    <p>未兑换订单</p>
                </div>
                <div className='ordersTrue'>
                    <div>
                        <img src="/icons/形状 42-2.png" alt="" />
                        <span>{ordersInfo.ordersTrue}</span>
                    </div>
                    <p>已兑换订单</p>
                </div>

            </div>
        )
    }
}
