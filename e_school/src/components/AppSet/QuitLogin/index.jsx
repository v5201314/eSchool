import React, { Component } from 'react'

//import './index.css'
export default class QuitLogin extends Component {
  render() {
    return (
      <div>
        <p>
            退出不会清空数据，下次登录依然可以使用。
        </p>
        <input type="button"/>
        <input type="button"/>
      </div>
    )
  }
}
