import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { advancedSliding } from '../../utils/utils'

import './index.css'
export default class CarouselMap extends Component {
    state = {
        //当前展示的图片
        index: 0,       
    }
    divRef = createRef(null);

    left = () => {
        const {carouselMaps } = this.props
        const {index} = this.state
            if (index + 1 === carouselMaps.length)
                this.setState({ index: 0 })
            else
                this.setState({ index: index + 1 })
    }

    rigth = () => {
        const {carouselMaps } = this.props
        const {index} = this.state
        if (index === 0)
            this.setState({ index: carouselMaps.length-1 })
        else
            this.setState({ index: index - 1 })
    }

    componentDidMount() {
        advancedSliding(this.divRef, { left: this.left, right: this.rigth })
        // const {index,carouselMaps} = this.state
        // let num = 0
        this.srcTimer = setInterval(() => {
            const {carouselMaps } = this.props
            const {index} = this.state
            if (index + 1 === carouselMaps.length)
                this.setState({ index: 0 })
            else
                this.setState({ index: index + 1 })
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.srcTimer)
    }
    render() {
        const {carouselMaps} = this.props
        const {index} = this.state
        return (
            <div id='carouselMap'>
                <ul className='circle'>
                    {
                        carouselMaps.map((carouselMapObj) => {
                            return (
                                <li className={index === carouselMapObj.key ? 'trueLi' : 'falseLi'} key={carouselMapObj.key}></li>
                            )
                        })
                    }
                </ul>
                <ul ref={this.divRef}>
                    <li>
                        <Link to={carouselMaps[index].to}>
                            <img src={carouselMaps[index].imgSrc} alt="" />
                        </Link>
                    </li>
                </ul>

            </div>
        )
    }
}
