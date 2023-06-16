import React, { Component } from 'react'
import GoodsHead from '../../../components/GoodsHead'
import TasksBar from './TasksBar'

import './index.css'
export default class ActiveTasks extends Component {
    state = {
        goodsHead: {
            info: "活动任务",
            //跳转地方
            to: '',
            toInfo:"查看详情"
        },
        tasksBars: [
            {
                tasksId: 1,
                imgSrc: '/images/-e-图层 4.png',
                title: '去旅行，定义你的专属体验',
                date: '12月20日-12月30日',
                heat: '10万+人已参与',
                to:''
            },
            {
                tasksId: 2,
                imgSrc: '/images/-e-图层 4.png',
                title: '去旅行，定义你的专属体验',
                date: '12月20日-12月30日',
                heat: '10万+人已参与',
                to:''
            },
            {
                tasksId: 3,
                imgSrc: '/images/-e-图层 4.png',
                title: '去旅行，定义你的专属体验',
                date: '12月20日-12月30日',
                heat: '10万+人已参与',
                to:''
            }
        ]
    }
    render() {
        const { goodsHead, tasksBars } = this.state
        return (
            <div id='activeTasks'>
                <GoodsHead goodsHead={goodsHead} />
                <TasksBar tasksBars={tasksBars} />
            </div>
        )
    }
}
