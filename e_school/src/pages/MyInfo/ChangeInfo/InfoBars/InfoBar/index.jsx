import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
export default class InfoBar extends Component {
  render() {
    const {infoBar} = this.props
    return (
      <Fragment>
        <Link to={'/changeInfo'+infoBar.path}>
         <div id='infoBar'>
            <span>{infoBar.introduce}</span>
            <p>&gt;</p>
            </div>
         </Link>
      </Fragment>
    )
  }
}
