import React from 'react'
import { Swiper } from 'antd-mobile'
import './Slider.css'
export default function Slider() {
    return (
        <div className='slider'>
            <Swiper stuckAtBoundary={false} slideSize={30} defaultIndex={2} style={{ height: '200px' }}>
                <Swiper.Item key='1'>
                    <div className='slider-item' >
                        <span className='slidr-time'>05.08</span>
                        <span className='slider-zx'></span>
                        <span className='slider-dian'></span>
                        <img src='https://image.juooo.com//group1/M00/03/26/rAoKmV2gOp2ATfNnAAPyEZ8Fpas410.png' className='slider-img' style={{ width: '100%' }} />
                    </div>
                </Swiper.Item>
            </Swiper>
        </div>
    )
}
