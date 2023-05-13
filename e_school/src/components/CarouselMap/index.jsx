import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default class CarouselMap extends Component {
    state = {
        index:0,
        carouselMaps:[
            {
                //图片src
                imgSrc:'/images/图层 1.png',
                //去哪里？
                to:''
            },
            {
                //图片src
                imgSrc:'/images/图层 14.jpg',
                //去哪里？
                to:''
            }
        ]
    }
    componentDidMount(){
       
    this.srcTimer = setInterval(()=>{
           this.setState({index:1})
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.srcTimer)
    }
    render() {
        const {index,carouselMaps} = this.state
        return (
            <div id='carouselMap'>
                <ul>
                    <li>
                        <Link>
                            <img src={carouselMaps[index].imgSrc} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
