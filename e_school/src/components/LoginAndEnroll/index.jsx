import React, { Component } from 'react'
import { Route,Link,Routes,Navigate } from 'react-router-dom'

import Login from './Longin'
import Enroll from './Enroll'

import './index.css'
export default class LoginAndEnroll extends Component {
  state = {
    //当前状态，决定显示注册还是登录
    currentStatus:0
  }

  changeCurrentStatus =()=>{
    this.state.currentStatus ===0?
    this.setState({currentStatus:1}):
    this.setState({currentStatus:0})

  }
  render() {
    const {currentStatus} = this.state
    return (
      <div id='loginAndEnroll' className='wrapper'>
        <div className='head'>
        <Link to={currentStatus===1?'/login':'/enroll'}>
            <div className='show' onClick={this.changeCurrentStatus}>{currentStatus===1?'去登录':'去注册'}</div>
            </Link>
        </div>
         

            <div className='img-box'>
            <img src="/images/图层 1.png" alt="" />
            </div>
            <Routes>
            <Route path='/enroll' Component={Enroll}/>
            <Route path='/login' Component={Login}/>
            <Route path="*" element={<Navigate to="/login"/>} />
           
            </Routes>
          
  
      </div>
    )
  }
}
