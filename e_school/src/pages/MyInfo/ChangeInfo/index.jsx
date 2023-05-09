import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

import ReturnArea from '../../../components/ReturnArea'
import ChangeMiddleware from '../../../components/ChangeMiddleware'
import ChangeAvatar from './ChangeAvatar'
import ChangeMyAddress from './ChangeMyAddress'
import ChangeNickname from './ChangeNickname'

export default class ChangeInfo extends Component {
  state = {
    // "返回头" 所需要的信息
    returnArea_header: "个人信息",
   
  }
  render() {
    return (
      <div id='changeInfo'>
        <ReturnArea header={this.state.returnArea_header} />
        <Routes>
        <Route path='/changeMyAddress' Component={ChangeMyAddress} />
         
       
          <Route path='/changeAvatar' Component={ChangeAvatar} />
          <Route path='/changeNickname' Component={ChangeNickname} />
          
          {/* <Route path='/'  Component={InfoBars}/> */}
          <Route path='/'  Component={ChangeMiddleware}/>
        </Routes>

      </div>
    )
  }
}
