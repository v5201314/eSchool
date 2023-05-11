import React, { Component } from 'react'
import {nanoid} from 'nanoid'

import InfoBar from './InfoBar'

import './index.css'
export default class InfoBars extends Component {
  render() {
  const {infoBars} = this.props
    return (
     <div id='infoBars'>
        {
          
          infoBars.map((infoBarObj)=>{
            return(
              <InfoBar key={nanoid()} infoBar={infoBarObj} />
            )
          })

        }

</div>
    )
  }
}
