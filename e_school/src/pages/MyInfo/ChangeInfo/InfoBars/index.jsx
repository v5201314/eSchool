import React, { Component } from 'react'
import InfoBar from './InfoBar'
export default class InfoBars extends Component {
  state = {
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
      <div>
        <InfoBar infoBar={this.state.infoBars[0]} />
        <InfoBar infoBar={this.state.infoBars[1]} />
        <InfoBar infoBar={this.state.infoBars[2]} />
      </div>
    )
  }
}
