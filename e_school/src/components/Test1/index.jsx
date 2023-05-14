import React, { Component } from 'react'
import CarouselMap from '../CarouselMap'
import Test from '../Test'

export default class Test1 extends Component {
  render() {
    return (
      <div>
        <CarouselMap/>
        {/* Test里面放后面的东西,如:刚刚的div */}
        <Test/>
      </div>
    )
  }
}
