import React from 'react'
import './Ticket.css'
import Tabbar from '../../components/tabbar/Tabbar'
export default function Ticket(props) {
  return (
    <div>
      <Tabbar>票夹</Tabbar>
      <div className='image-wrap'>
      <img style={{width:" 120px"}} src='https://m.juooo.com/static/img/ticket_empty.cf4b072.png'></img>
      <span style={{color:" #999999",fontSize: "15px", marginTop: "15px",marginBottom:'50px'}}>暂无电子票</span>
      <div style={{background: "linear-gradient(-50deg,#FF4D4A,#FF9A34)",    boxShadow: "0px 0.05333rem 0.12rem 1px rgba(255,77,74,0.3)",width:'150px',height:'50px',borderRadius:'37px',fontSize:'20px',textAlign:'center',lineHeight:'50px',color:'#fff'}} onClick={()=>{
        props.history.push('/login')
      }}>登录</div>
      </div>
    
    </div>
  )
}
