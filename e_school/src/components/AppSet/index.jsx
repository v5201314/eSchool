import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route,Routes } from 'react-router-dom'
import ReturnArea from '../ReturnArea'
import SetMiddleware from '../SetMiddleware'

import './index.css'
class AppSet extends Component {
    state = {
        //“返回头” 所需要的信息
        returnArea_header: "设置",
      }
    render() {
        return (
            <div id='userSet' >
              <ReturnArea header={this.state.returnArea_header} />
                <Routes>
                    <Route path='/' Component={SetMiddleware} />
                </Routes>

            </div>
        )
    }
}

export default connect(
    (state) => {
        return{
            userId:state.userId
        }
    }, {

})(AppSet)
