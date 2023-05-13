import React, { Component } from 'react'

import './index.css'
export default class Head extends Component {
  render() {
    return (
      <div id='head'>
        <div className='searchBar'>
            <div className='GPS'>
                <img src="/icons/home/-e-定位.png" alt="" />
                <span>绵阳</span>
            </div>
            <div className='searchBox'> 
              <img src="/icons/-e-搜索.png" alt="" />
              <input type="text" placeholder='请输入关键字'/>
            </div>            
        </div>
        <div className='message'>
          <span>23</span>
          <img src="/icons/home/-e-消息.png" alt="" />
        </div>
      </div>
    )
  }
}
