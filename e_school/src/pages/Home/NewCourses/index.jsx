import React, { Component } from 'react'

import GoodsHead from '../../../components/GoodsHead'

import './index.css'
export default class NewCourses extends Component {
  state = {
    goodsHead: {
      info: "最新课程",
      //跳转地方
      to: ''
    }
  }
  render() {
    const { goodsHead } = this.state
    return (
      <div id='newCourses'>
        <GoodsHead goodsHead={goodsHead} />
        <div className='course'>
          <div>
            <div className='detail'>
              <div>
                <p>
                  <span>高级</span>
                  雅思考情解析教程
                </p>
              </div>
              <p>1.6W+次播放</p>
            </div>
          </div>
          <div>
            <div className='detail'>
            <div>
                <p>
                  <span>高级</span>
                  雅思考情解析教程
                </p>
              </div>
              <p>1.6W+次播放</p>
            </div>
          </div>
          <div>
            <div className='detail'>
            <div>
                <p>
                  <span>高级</span>
                  雅思考情解析教程
                </p>
              </div>
              <p>1.6W+次播放</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}