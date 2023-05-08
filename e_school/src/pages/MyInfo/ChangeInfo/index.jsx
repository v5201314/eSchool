import React, { Component } from 'react'

import ReturnArea from '../../../components/ReturnArea'

export default class ChangeInfo extends Component {
  state = {
    returnArea_header:"个人信息"
  }
  render() {
    return (
      <div id='changeInfo'>
        <ReturnArea header={this.state.returnArea_header}/>
      </div>
    )
  }
}
