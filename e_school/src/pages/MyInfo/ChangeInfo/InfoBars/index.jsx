import React, { Component,Fragment } from 'react'
import InfoBar from './InfoBar'
export default class InfoBars extends Component {
  render() {
  const {infoBars} = this.props
  console.log(infoBars.length);
    return (
     <Fragment>
        {
          
          infoBars.map((infoBarObj)=>{
            return(
              <InfoBar infoBar={infoBarObj} />
            )
          })

        }

</Fragment>
    )
  }
}
