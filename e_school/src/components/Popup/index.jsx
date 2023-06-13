import React, { Component } from 'react'

import './index.css'
export default class Popup extends Component {
    //使用弹窗组件需要传递的对象
    // popupObj:{
    //     title:"领取任务",
    //     content:"领取任务成功后请在 我的=>我的任务 中查看",
    //     //回调方法可有可无
    //     confirmFcs:()=>{
    //         console.log("点击确认后执行的方法");
    //     },
    //     cancelFcs:()=>{
    //         console.log("点击取消后执行的方法");
    //     }
    // }


    //点击确认后执行
    confirm = ()=>{
        this.props.popupObj.confirmFcs && this.props.popupObj.confirmFcs()
        this.props.Popup.current.style.display = "none"
    }
    //点击取消后执行
    cancel = ()=>{
        //如果存在回调方法就执行它
        this.props.popupObj.cancelFcs && this.props.popupObj.cancelFcs()
        this.props.Popup.current.style.display = "none"
    }

  render() {
    const {popupObj} = this.props
    return (
      <div id='Popup' ref={this.props.Popup}>
        <div className='content'>
            <span>{popupObj.title}</span>
            <p>{popupObj.content}</p>
            <div className='but'>
                <button className='confirm' onClick={this.confirm}>确认</button>
                <button className='cancel' onClick={this.cancel}>取消</button>
            </div>
        </div>
      </div>
    )
  }
}
