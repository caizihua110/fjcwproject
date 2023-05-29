import React, { useEffect, useState } from 'react'
import './TourShowInfo.css'
import Tabbar from '../../components/tabbar/Tabbar'
import axios from 'axios'
import { show,hide } from '../../creatActive/TabbarActiveCreator'
import { connect } from 'react-redux'
const moment = require('moment'); 
 function TourShowInfo(props) {
  const [getInfo, setgetInfo] = useState([])
  console.log(props);
  useEffect(() => {
    axios(`/api/show/tour/getInfo?id=${props.match.params.id}&version=6.1.86&referer=2`).then(res => {
      console.log(res.data.data);
      setgetInfo(res.data.data)
    })
    props.hide()
    return()=>{
      props.show()
    }
  },[])
 
  return (
    <div className='tour-page'>
      <Tabbar {...props}>巡回演出</Tabbar>
      <div className='tour-shade'>
        < img className='tour-shade-img' src={getInfo.mobile_col_img} />
        <div className='tour-shade-content'>
          <div className='tour-pic'>
            <img src={getInfo.mobile_col_img}/>
          </div>
          <div className='tour-content'>
            <p className='tour-title'>{getInfo.name}</p>
            <p className='tour-city'> {getInfo.city_num}个城市 | {getInfo.show_num}场演出 </p>
            <p className='tour-time'> {moment.unix(getInfo.start_time).format('YYYY-MM-DD')+"-"+moment.unix(getInfo.end_time).format('YYYY-MM-DD')}</p>
          </div>
        </div>
      </div>
      <ul className='tour-list'>
        {getInfo.list?.map(item=><li className='tour-item' key={item.show_id}>
          <div className='tour-item-time'>{moment.unix(item.start_time).format('MM/DD')}</div>
          <div className='tour-item-info'>
            <p className='tour-item-title'> {item.sch_name} </p>
            <p className='tour-item-address'>{item.venue_name}</p>
            <p className='tour-item-price'><span style={{color:'red',fontSize:'18px'}}>{item.min_price} </span> 起</p>
          </div>
        </li>)}
      </ul>
    </div>
  )
}
const mapDispatchToProps={
  hide,
  show
}
export default connect(null,mapDispatchToProps)(TourShowInfo)
