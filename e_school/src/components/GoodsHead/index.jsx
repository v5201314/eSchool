import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
export default class GoodsHead extends Component {
  render() {
    const {goodsHead} = this.props
    return (
      <div id='goodsHead'>
        <p>{goodsHead.info}</p>
        <Link to={goodsHead.to}>
        <span>{goodsHead.toInfo}</span>
        </Link>     
      </div>
    )
  }
}
