import React, { Component, Fragment } from 'react'

import './index.css'
export default class UserInfo
  extends Component {
  render() {
    return (
      <Fragment>
        <div id='userInfo'>
          <div className='showUserInfo'>
            <div className='headPortrait'>
              <img src="/images/图层 14.jpg" alt="头像" />
            </div>

            <div className='userDetail'>
              <div className='userName'>
                <p>你的小可爱</p>
                <span>v4</span>
              </div>
              <div className='referrer'>
                <span>推荐人：</span>
                <p>张三</p>
              </div>
              <div className=' inviteCode'>
              <span>邀请码：</span>
                <p>FEOOXY</p>
              </div>
            </div>
           
          </div>
          <div className='softwareSet'>
              <img src="/icons/设置.png" alt="设置" />
            </div>
        </div>
      </Fragment>
    )
  }
}
