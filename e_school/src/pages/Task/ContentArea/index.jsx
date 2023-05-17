import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CategoryBar from '../../../components/CategoryBar'

import './index.css'
export default class ContentArea extends Component {
    render() {
        return (
            <div id='contentArea'>
                <CategoryBar />
                <div>
                    <Link>
                        <img src="" alt="" />
                        <div></div>
                    </Link>
                </div>
            </div>
        )
    }
}
