import React, { Component } from 'react'
import GoodsHead from '../../../components/GoodsHead'
import TasksBar from '../ActiveTasks/TasksBar'

import './index.css'
export default class CommunityActivities extends Component {
    state = {
        goodsHead: {
            info: "社区活动",
            //跳转地方
            to: ''
          },
          tasksBars: [
            {
                tasksId: 1,
                imgSrc: '/images/图层 6.png',
                title: '贴心服务暖人心社区公共志愿服务日活动',
                date: '5小时前',
                heat: '10万+人已参与',
                to:''
            },
            {
                tasksId: 2,
                imgSrc: '/images/图层 6.png',
                title: '贴心服务暖人心社区公共志愿服务日活动',
                date: '5小时前',
                heat: '10万+人已参与',
                to:''
            },
            {
                tasksId: 3,
                imgSrc: '/images/图层 6.png',
                title: '贴心服务暖人心社区公共志愿服务日活动',
                date: '5小时前',
                heat: '10万+人已参与',
                to:''
            }
        ]
    }
  render() {
    const {goodsHead,tasksBars} = this.state
    return (
      <div id='communityActivities'>
        <GoodsHead goodsHead={goodsHead}/>
        <TasksBar tasksBars={tasksBars}/>
      </div>
    )
  }
}
