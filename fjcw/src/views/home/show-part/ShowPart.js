import React, { useEffect, useState } from 'react'
import { RightOutline } from 'antd-mobile-icons'
import './ShowPart.css'
import axios from 'axios'
import { Swiper } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
const moment = require('moment');
 function ShowPart(props) {
    const [getShowList, setgetShowList] = useState([])
    const [getCityList, setgetCityList] = useState([])

    useEffect(() => {
        axios('/api/show/tour/getList?version=6.1.86&referer=2').then(res => {
            console.log(res.data.data.list);
            setgetShowList(res.data.data.list)
            res.data.data.list.map(item => {
                setgetCityList(item.citys)
            })
        })
    }, [])
    return (
        <div className='show'>
            <div className='show-header'>
                <span className='show-title'>巡回演出</span>
                <div className='show-all'>
                    <span>全部</span>
                    <RightOutline />
                </div>
            </div>

            <div className='show-swiper'>
                <Swiper loop >
                    {getShowList.map(item => <Swiper.Item key={item.id} onClick={()=>{props.history.push(`/tour/${item.id}`)}}>
                        <div className='swiper-pic'>
                            <img src={item.mobile_col_img} />
                        </div>
                        <div className='swiper-conent'>
                            <div className='time'>{moment.unix(item.start_time).format('YYYY.MM.DD') + " - " + moment.unix(item.end_time
                            ).format('YYYY.MM.DD')}</div>
                            <div className='swiper-title'>{item.name}</div>
                            <div className='swiper-discount'>
                                <span style={{ color: '#ff6743', fontSize: '18px' }}>￥{item.min_price}</span> 元起
                            </div>

                            <div className='city'>
                                <div className='city-num'>{item.citys.length}</div>
                                <div style={{ color: '#999',width:'55px',marginLeft:'5px' }}>城巡演</div>
                                
                                    <ul className=' city-list'>
                                    {item.citys.map(data => <li className='city-name' key={data.sch_id} > {data.name}</li>)}
                                    </ul>    
                                
                            </div>
                        </div>
                    </Swiper.Item>)}
                </Swiper>
            </div>


        </div>
    )
}
export default withRouter(ShowPart)