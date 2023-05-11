import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
export default class InfoBar extends Component {
  //如果不想页面Link跳转，请将 path值 设置为字符 '0'
  handleClick = (event)=>{
    if(this.props.infoBar.path==='0'){
      event.preventDefault()
    }
  }
  render() {
    const {infoBar} = this.props
    return (
      <Fragment>
        <Link to={'/changeInfo'+infoBar.path} onClick={this.handleClick}>
         <div id='infoBar'>
            <span>{infoBar.introduce}</span>
            <p>&gt;</p>
            </div>
         </Link>
      </Fragment>
    )
  }
}
