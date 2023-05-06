import React, { Component } from 'react'

import { connect } from 'react-redux'

import './index.css'
class UserSet extends Component {
    render() {
        return (
            <div id='userSet' className='warpeer'>UserSet</div>
        )
    }
}

connect(
    (state) => {
        return{
            userId:state.userId
        }
    }, {

})(UserSet)
