import React, { Component } from 'react'

import './index.css'
export default class CategoryBar extends Component {
  render() {
    return (
      <div id='categoryBar'>
        <select name="" id="select1">
            <option selected>综合排序</option>
            <option >能量</option>
            <option >人气</option>
        </select>
        <select name="" id="select2">
            <option selected>距离</option>
            <option >&lt;1km</option>
            <option >&lt;5km</option>
            <option >&gt;5km</option>
        </select>
        <select name="" id="select3">
            <option selected>筛选</option>
            <option >选项一</option>
            <option >选项二</option>
        </select>
      </div>
    )
  }
}
