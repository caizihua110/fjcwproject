import React, { useEffect, useState } from 'react'
import './Theatre.css'
import axios from 'axios'
import { Swiper } from 'antd-mobile'
import { MoreOutline } from 'antd-mobile-icons'
export default function Theatre(props) {
  const [theatreList, settheatreList] = useState([])
  useEffect(() => {
    axios('/api/theatre/index/getTheatreList?page=1&version=6.1.86&referer=2').then(res => {
      console.log(res.data.data.theatre_list);
      settheatreList(res.data.data.theatre_list)
      // setSliderList(res.data.data.theatre_list)
    })
  }, [])
  return (
    <div className='theatre-page'>
      <div className='theatre-name'>剧院</div>

      <ul className='theatre-list'>
        {theatreList.map(item => <li className='theatre-item' key={item.id}>
          
          <div className='theatre-info'>
            <div className='theatre-pic'>
              <img src={item.pic} />
            </div>
            <div className='theatre-title'>
              <h2 style={{ marginBottom: '5px' }}>{item.name}</h2>
              <span style={{ color: '#666666' }}>{item.count}场在售演出</span>
            </div>
            
          </div>

          <div className='slider'>
            <Swiper stuckAtBoundary={false} slideSize={30} defaultIndex={2} style={{ height: '200px' }} indicator={() => null}>
              {item.showList.map(data => <Swiper.Item >
                <div className='slider-item' key={data.id} onClick={() => {
                  console.log(data);
                  props.history.push(`/detail/${data.id}`)
                }} >
                  <span className='slidr-time'>{data.show_time}</span>
                  <span className='slider-zx'></span>
                  <span className='slider-dian'></span>
                  <img src={data.pic} className='slider-img' style={{ width: '100%' }} />
                </div>

              </Swiper.Item>)}
            </Swiper>
          </div>

        </li>)}

      </ul>

    </div>
  )
}
