import React from 'react'
import './My.css'
import { SetOutline, RightOutline ,FileOutline,CouponOutline,ReceiptOutline,
  UserContactOutline ,EnvironmentOutline,SmileOutline} from 'antd-mobile-icons'
export default function My( props) {
  return (
    <div className='my-page'>
      <div className='bgc-pic'>
        <span className='set-icon'><SetOutline /></span>
        <div className='my-info'>
          <div className='my-pic' onClick={()=>{
            props.history.push('/login')
          }}>
            <img src='https://m.juooo.com/static/img/logo-user.8413cbf.png' />
          </div>
          <div className='my-login'>
            <p style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '5px' }}>登录/注册</p>
            <p>请点击登录<RightOutline /></p>
          </div>
          <span className='my-huiyuan'>普通会员</span>
          <ul className='my-list'>
            <li className='item'>
              <span style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>0</span>
              <span>账户余额</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>0</span>
              <span>积分</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>0</span>
              <span>优惠券</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>立即开通</span>
              <span>橙PLUS卡</span>
            </li>
          </ul>
        </div>

      </div>
      <div style={{width:'365px',margin:'0 auto'}}>
        <img style={{width:'100%'}} src='https://m.juooo.com/static/img/ad.e4a88b4.png' />
      </div>

      <ul className='my-list1'>
            <li className='item'>
              <span style={{ fontSize: '24px', marginBottom: '5px' }}><FileOutline /></span>
              <span>我的订单</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '24px', marginBottom: '5px' }}><CouponOutline /></span>
              <span>我的票夹</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '24px',  marginBottom: '5px' }}><ReceiptOutline /></span>
              <span>我的卡包</span>
            </li>
            
          </ul>
           
          <ul className='my-list1'>
            <li className='item'>
              <span style={{ fontSize: '24px', marginBottom: '5px' }}><UserContactOutline /></span>
              <span>实名购票人</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '24px', marginBottom: '5px' }}><EnvironmentOutline /></span>
              <span>收货地址</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '24px',  marginBottom: '5px' }}><FileOutline /></span>
              <span>意见反馈</span>
            </li>
            <li className='item'>
              <span style={{ fontSize: '24px',  marginBottom: '5px' }}><SmileOutline /></span>
              <span>客服帮助</span>
            </li>
          </ul>
    </div>
  )
}
