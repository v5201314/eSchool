import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
export default class UserInfo extends Component {
  render() {
    //获取父组件传递过来的用户信息
    const {userInfo} = this.props
    return (
      <Fragment>
        <div id='userInfo'>
          <Link to='/changeInfo'>
          <div className='showUserInfo'>
            <div className='headPortrait'>
              <img src={userInfo.avatar} alt="头像" />
            </div>

            <div className='userDetail'>
              <div className='userName'>
                <p>{userInfo.nicName}</p>
                <span>v{userInfo.vip}</span>
              </div>
              <div className='referrer'>
                <span>推荐人：</span>
                <p>{userInfo.Referrer}</p>
              </div>
              <div className=' inviteCode'>
              <span>邀请码：</span>
                <p>{userInfo.invitationCode}</p>
              </div>
            </div>
           
          </div>
          </Link>
          
          <div className='softwareSet'>
            <Link to='/appSet'>
            <img src="/icons/设置.png" alt="设置" />
            </Link>
             
            </div>
        </div>
      </Fragment>
    )
  }
}
