import React, { Component,Fragment } from 'react'
import {nanoid} from 'nanoid'

import InfoBar from './InfoBar'


export default class InfoBars extends Component {
  render() {
  const {infoBars} = this.props
    return (
     <Fragment>
        {
          
          infoBars.map((infoBarObj)=>{
            return(
              <InfoBar key={nanoid()} infoBar={infoBarObj} />
            )
          })

        }

</Fragment>
    )
  }
}
