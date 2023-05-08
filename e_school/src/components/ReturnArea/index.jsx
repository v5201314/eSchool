import React, { Component } from 'react'

import './index.css'
export default class ReturnArea extends Component {

  back = ()=>{
    
  }

  render() {
    //接收父组件传递过来的表头信息
    const { header } = this.props
    return (
      <div id='returnArea'>
        <span onClick={this.back}>&lt;</span>
        <p>{header}</p>
      </div>
    )
  }
}
