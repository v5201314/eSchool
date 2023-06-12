import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CategoryBar from '../../../components/CategoryBar'

import './index.css'
export default class ContentArea extends Component {
    state = {
        tasksBars:[]
    }
    tasksBars= [
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
            heat: 530,
            distance: 0.1,
            to: ''
        },
        {
            tasksId: 3,
            imgSrc: '/images/组 1 拷贝 3.png',
            title: '发传单兼职赚钱任务',
            energy: 66,
            heat: 438,
            distance: 2.5,
            to: ''
        },
        {
            tasksId: 4,
            imgSrc: '/images/组 1 拷贝.png',
            title: '发传单兼职赚钱任务',
            energy: 110,
            heat: 666,
            distance: 2.5,
            to: ''
        },
        {
            tasksId: 5,
            imgSrc: '/images/组 1 拷贝 2.png',
            title: '发传单兼职赚钱任务',
            energy: 30,
            heat: 250,
            distance: 0.1,
            to: ''
        },
        {
            tasksId: 6,
            imgSrc: '/images/组 1 拷贝 3.png',
            title: '发传单兼职赚钱任务',
            energy: 20,
            heat: 335,
            distance: 2.5,
            to: ''
        },
    ]

    collations=[
        {
            selected:'综合排序',
            value1:'energy',
            value2:'energy'
        },
        {
            selected:'距离',
            value1:'lessThan1',
            value2:'energy'
        }
    ]

    setTasksBars = (Collation) => {
        switch (Collation) {
            case 'energy':
                this.setState({ tasksBars: this.state.tasksBars.sort((a, b) => -(a.energy - b.energy)) })
                break;
            case 'heat':
                this.setState({ tasksBars: this.state.tasksBars.sort((a, b) => -(a.heat - b.heat)) })
                break;
            case 'lessThan1':
                this.setState({
                    tasksBars: this.tasksBars.filter((item) => {
                        return item.distance < 1
                    })
                })
                break;
            case 'lessThan5':
                this.setState({
                    tasksBars: this.tasksBars.filter((item) => {
                        return item.distance < 5
                    })
                })
                break;
            case 'greaterThan5':
                this.setState({
                    tasksBars: this.tasksBars.filter((item) => {
                        return item.distance >= 5
                    })
                })
                break;

            default:
                this.setState({tasksBars:this.tasksBars})
        }

    }

   

    componentDidMount(){
        //通过网络请求赋值
        this.setState({tasksBars:this.tasksBars})
    }
    render() {
        const { tasksBars } = this.state
        return (
            <div id='contentArea'>
                <CategoryBar setTasksBars={this.setTasksBars} />
                {
                    tasksBars.length===0?
                    <h1>暂无查询结果</h1>:
                    tasksBars.map((tasksObj) => {
                        return (
                            <div id='tasksBar-task' key={tasksObj.tasksId}>
                                <Link to={{pathname:'/taskDetails',state:tasksObj}} >
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
                                            <p className='distance'>距离：{tasksObj.distance < 1 ? tasksObj.distance * 1000 + 'm' : tasksObj.distance + 'km'}</p>
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
