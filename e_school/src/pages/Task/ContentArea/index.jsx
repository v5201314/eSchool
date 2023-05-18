import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CategoryBar from '../../../components/CategoryBar'

import './index.css'
export default class ContentArea extends Component {
    state = {
        tasksBars: [
            {
                tasksId: 1,
                imgSrc: '/images/组 1 拷贝.png',
                title: '发传单兼职赚钱任务',
                energy: 90,
                heat: 500,
                distance: 2.5,
                to: ''
            },
            {
                tasksId: 2,
                imgSrc: '/images/组 1 拷贝 2.png',
                title: '发传单兼职赚钱任务',
                energy: 83,
                heat: 500,
                distance: 100,
                to: ''
            },
            {
                tasksId: 3,
                imgSrc: '/images/组 1 拷贝 3.png',
                title: '发传单兼职赚钱任务',
                energy: 66,
                heat: 500,
                distance: 2.5,
                to: ''
            },
            {
                tasksId: 4,
                imgSrc: '/images/组 1 拷贝.png',
                title: '发传单兼职赚钱任务',
                energy: 110,
                heat: 500,
                distance: 2.5,
                to: ''
            },
            {
                tasksId: 5,
                imgSrc: '/images/组 1 拷贝 2.png',
                title: '发传单兼职赚钱任务',
                energy: 30,
                heat: 500,
                distance: 100,
                to: ''
            },
            {
                tasksId: 6,
                imgSrc: '/images/组 1 拷贝 3.png',
                title: '发传单兼职赚钱任务',
                energy: 20,
                heat: 500,
                distance: 2.5,
                to: ''
            },
        ]
    }

    componentDidMount(){
        console.log(this.state.tasksBars.sort((a,b)=>-(a.energy-b.energy)));
        this.setState({tasksBars:this.state.tasksBars.sort((a,b)=>-(a.energy-b.energy))})
    }

    render() {
        const { tasksBars } = this.state
        return (
            <div id='contentArea'>
                <CategoryBar />
                {
                    tasksBars.map((tasksObj)=>{
                        return(
                            <div id='tasksBar-task' key={tasksObj.tasksId}>
                            <Link >
                                <img src={tasksObj.imgSrc} alt="" />
                                <div className='introduce'>
                                    <p>{tasksObj.title}</p>
                                    <div>
                                        <img src="/icons/能量.png" alt="" />
                                        <span className='energy'>社区能量值：{tasksObj.energy}</span>
                                        <img src="/icons/火焰.png" alt="" />
                                        <p className='heat'>人气值：{tasksObj.heat}</p>
                                    </div>
                                    <div>
                                        <img src="/icons/home/-e-定位.png" alt="" />
                                        <p className='distance'>距离：{tasksObj.distance}{tasksObj.distance > 99 ? 'm' : 'km'}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )
                    })
                   
                }
            </div>
        )
    }
}
