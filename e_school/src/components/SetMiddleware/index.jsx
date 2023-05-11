import React, { Component, Fragment } from 'react'

import InfoBars from '../../pages/MyInfo/ChangeInfo/InfoBars'

export default class SetMiddleware extends Component {
    state = {
        // “消息条需要的数据”
        infoBars: [
            {
                introduce: '账号与安全',
                path: '/changeAvatar'
            },
            {
                introduce: '青少年模式',
                path: '/changeNickname'
            },
            {
                introduce: '关怀模式',
                path: '/changeMyAddress'
            },
            {
                introduce: '隐私',
                path: '/changeMyAddress'
            },
            {
                introduce: '切换账号',
                path: '/changeMyAddress'
            },
            {
                introduce: '退出登录',
                path: '/changeMyAddress'
              },
        ]
    }

    quitLogin = (event)=>{
        console.log(event.target);
      }

    render() {
        return (
            <div onClick={this.quitLogin}>
                <InfoBars infoBars={this.state.infoBars} />
            </div>
        )
    }
}
