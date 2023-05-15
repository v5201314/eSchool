import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { advancedSliding } from '../../utils/utils'

import './index.css'
export default class CarouselMap extends Component {
    state = {
        //当前展示的图片
        index: 0,
        carouselMaps: [
            {
                //图片src
                imgSrc: '/images/图层 1.png',
                //去哪里？
                to: '',
                //图片key
                key: 0,
            },
            {
                //图片src
                imgSrc: '/images/云朵穿心.jpg',
                //去哪里？
                to: '',
                //图片key
                key: 1,
            }, {
                //图片src
                imgSrc: '/images/可爱兔子.jpg',
                //去哪里？
                to: '',
                //图片key
                key: 2,
            },
            {
                //图片src
                imgSrc: '/images/风景 1.jpg',
                //去哪里？
                to: '',
                //图片key
                key: 3,
            }
        ]
    }
    divRef = createRef(null);

    left = () => {
        const { index, carouselMaps } = this.state
            if (index + 1 === carouselMaps.length)
                this.setState({ index: 0 })
            else
                this.setState({ index: index + 1 })
    }

    rigth = () => {
        const { index, carouselMaps } = this.state
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
            const { index, carouselMaps } = this.state
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
        const { index, carouselMaps } = this.state
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
