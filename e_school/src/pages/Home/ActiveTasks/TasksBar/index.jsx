import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
export default class TasksBar extends Component {
    render() {
        const { tasksBars } = this.props
        return (
            <Fragment>
                {
                    tasksBars.map((tasksObj) => {
                        return (
                            
                                <div id='tasksBar' key={tasksObj.tasksId}>
                                    <Link to={tasksObj.to}>
                                    <img src={tasksObj.imgSrc} alt="" />
                                    <div className='introduce'>
                                        <p>{tasksObj.title}</p>
                                        <div>
                                            <span className='circle'></span>
                                            <span className='energy'>{tasksObj.date}</span>
                                            <img src="/icons/火焰.png" alt="" />
                                            <p className='heat'>{tasksObj.heat}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                          
                        )
                    })
                }

            </Fragment>
        )
    }
}
