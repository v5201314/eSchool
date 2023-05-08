import React, { Component } from 'react'
import { createBrowserHistory } from 'history';

import './index.css'


const history = createBrowserHistory()

export default class ReturnArea extends Component {

  back = ()=>{
    history.back()
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
