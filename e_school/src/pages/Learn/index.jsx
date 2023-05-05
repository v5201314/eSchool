import React, { Component } from 'react'
import {changeTimeValue} from '../../utils/api'
export default class Learn extends Component {

  render() {
    console.log(changeTimeValue({id:"1",value:"12"}).then((res)=>{
        return res.data
    },()=>{

    }
    ));
    return (
      <div>Learn</div>
    )
  }
}
