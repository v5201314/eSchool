import React, { Component } from 'react'

import { connect } from 'react-redux'

import './index.css'
class AppSet extends Component {
    render() {
        return (
            <div id='userSet' className='warpeer'>AppSet</div>
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
