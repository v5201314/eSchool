import React, { Component } from 'react'

import './index.css'
import { Link } from 'react-router-dom'
export default class HotFrame extends Component {
    render() {
        const { hotFrame } = this.props
        return (

            <div id='hotFrame'>
                <Link>
                    <div className='leftFrame'>
                        <span className='hot'>HOT</span>
                        <span className='title'>{hotFrame[0].title}</span>
                        <p>{hotFrame[0].content}</p>
                        <img src={hotFrame[0].imgSrc} alt="" />
                    </div>
                </Link>
                <Link>
                    <div className='rightFrame'>
                        <span className='hot'>HOT</span>
                        <span className='title'>{hotFrame[1].title}</span>
                        <p>{hotFrame[1].content}</p>
                        <img src={hotFrame[1].imgSrc} alt="" />
                    </div>
                </Link>
            </div>
        )
    }
}
