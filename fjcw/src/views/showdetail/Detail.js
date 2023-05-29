import React, { useEffect, useState } from 'react'
import Tabbar from '../../components/tabbar/Tabbar'
import './Detail.css'
import axios from 'axios';
import { EnvironmentOutline, MoreOutline,UserOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux';
import { show,hide } from '../../creatActive/TabbarActiveCreator';
 function ShowDetail(props) {
  const [getScheduleInfo, setgetScheduleInfo] = useState([])
  const [activeList, setactiveList] = useState([])
  console.log(props);
  useEffect(() => {
    axios(`/api/Schedule/Schedule/getScheduleInfo?schedular_id=${props.match.params.id}&version=6.1.86&referer=2`).then(res => {
      console.log(res.data.data);
      setgetScheduleInfo(res.data.data)
    })
    props.hide()
    return ()=>{
      props.show()
    }
  }, [])

  useEffect(() => {
    axios(`/api/Promotion/Promotion/getPromotionList?version=6.1.86&referer=2`).then(res => {
      console.log(res.data.data);
      setactiveList(res.data.data)
    })
  }, [])
  console.log(getScheduleInfo);
  // console.log(getScheduleInfo.share_data?.share_pic);
  return (
    <div className='detail-page' style={{ backgroundColor: '#f5f5f5', height: '100%' }}>
      <div className='detail-header-wrap'>
        <Tabbar {...props}>演出详情</Tabbar>
        <div className='detail-header'>
          <div className='detail-content'>
            <img src={getScheduleInfo.share_data?.share_pic} className='shade-img'/>
            <div className='detail-pic'>
              <img src={getScheduleInfo.share_data?.share_pic} />
            </div>
            <div className='detail-right'>
              <div className='title'>{getScheduleInfo.share_data?.share_title}</div>
              <div className='price'>￥{getScheduleInfo.static_data?.high_price}</div>
            </div>
          </div>

          <div style={{ padding: '10px', }}>
            <ul className='support-type-list'>
              {getScheduleInfo.static_data?.support.list.map(item => <li className='support-type-item' key={item}>
                <span style={{ display: 'inline-block', marginRight: '3px', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'red', textAlign: 'center', fontSize: '15px', color: '#fff' }}>√</span>
                <span>{item}</span>
              </li>)}
            </ul>

            <div className='time'>开始时间：{getScheduleInfo.static_data?.show_time_data.show_time_start_display}</div>
          </div>

          <div className='address-wrap'>
            <div className='address-info'>
              <p style={{ fontSize: '16px', marginBottom: '5px' }}>{getScheduleInfo.static_data?.venue.venue_name}</p>
              <p style={{ color: '#666', fontSize: '11px' }}>{getScheduleInfo.static_data?.venue.venue_address}</p>
            </div>
            <span className='address-icon'>
              <EnvironmentOutline />
            </span>
          </div>

        </div>
      </div>

      <div style={{ padding: '10px', marginBottom: '10px' }}>
        <div className='active-wrap'>
          <span className='youhui'>优惠:</span>
          <div className='active-info'>
            <div className='active-info-vip'>
              <span style={{ border: '1px solid #ff6743', display: 'inline-block', padding: '1px 5px', borderRadius: '3px', fontSize: '12px' }}>V+</span>
              <span style={{ marginLeft: '8px' }}>V+专享活动，指定票价3折</span>
            </div>
            <div className='active-info-discount' >
              <span style={{ border: '1px solid #ff6743', display: 'inline-block', padding: '1px 5px', borderRadius: '3px', fontSize: '12px' }}>折扣</span>
              <span style={{ marginLeft: '8px' }}>优惠活动，指定票价5折</span>
            </div>

          </div>
          <span className='more-icon'><MoreOutline /></span>
        </div>
        <div className='richang'>
          <span className='youhui'>入场:</span>
          <span style={{ marginLeft: '10px' }}>{getScheduleInfo.static_data?.tips.desc}</span>
        </div>
      </div>

      <div className='intro-detail' >
        <h2>演出详情</h2>
        <div dangerouslySetInnerHTML={{ __html:getScheduleInfo.static_data?.show_desc.desc}}></div>
      </div>

      <footer>
        <div className='footer-text'>
          <span><UserOutline /></span>
          <span>客服</span>
        </div>
        <div className='footer-buy'>立即购买</div>
      </footer>
    </div>

  )
}
const mapDispatchToProps={
  hide,
  show
}
export default connect(null,mapDispatchToProps)(ShowDetail)
