import React, { Component,Fragment } from 'react'

 import InfoBars from '../../pages/MyInfo/ChangeInfo/InfoBars'

export default class ChangeMiddleware extends Component {
  state = {
     // “消息条需要的数据”
     infoBars: [
        {
          introduce: '头像',
          path: '/changeAvatar'
        },
        {
          introduce: '昵称',
          path: '/changeNickname'
        },
        {
          introduce: '我的地址',
          path: '/changeMyAddress'
        },
      ]
  }
    render() {
    return (
      <Fragment>
        <InfoBars infoBars={this.state.infoBars}/>
      </Fragment>
    )
  }
}
