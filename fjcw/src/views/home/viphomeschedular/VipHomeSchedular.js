import React, { useEffect , useState} from 'react'
import './VipHomeSchedular.css'
import { RightOutline } from 'antd-mobile-icons'
import { Swiper } from 'antd-mobile'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
 function VipHomeSchedular(props) {
    const [discountList, setdiscountList] = useState([])
    useEffect(()=>{
        axios('/api/vip/index/getVipHomeSchedular?city_id=0&version=6.1.86&referer=2').then(res=>{
            console.log(res.data.data.discountList);
            setdiscountList(res.data.data.discountList)
        })
    },[])
    return (
        <div className='vip-home-schedular'>
            <div className='discount-vip-box' onClick={()=>{props.history.push('/vip')}}>
                <div className='discount-vip'>
                    <div className='left'>
                        <img src='https://image.juooo.com/group1/M00/04/16/rAoKNV4BeHiAGAi8AAAFggWA0y8333.png'></img>

                    </div>
                    <span>会员专享折扣</span>
                    <div className='right'>
                        <span>99元/年</span>
                        <RightOutline />
                    </div>
                </div>
            </div>
            <div className='swiper' >

                <Swiper loop autoplay >
                    {discountList.map(item=><Swiper.Item key={item.schedular_id} onClick={()=>{
                        props.history.push(`/detail/${item.schedular_id}`)
                    }}>
                        <div className='swiper-pic'>
                            <img src={item.pic}/>
                        </div>
                        <div className='swiper-conent'>
                            <div className='swiper-title'>{item.schedular_name}</div>
                            <div className='swiper-discount'>
                                <div className='discount' ><span style={{color:'#ff6743',fontSize:'18px'}}>{item.min_discount}</span> 折起</div> 
                                <div className='buy'><span style={{border:'1px solid #ff6743',padding:'4px 10px',borderRadius:'6px',color:'#ff6743'}}>立即抢购</span></div>
                            </div>
                        </div>
                    </Swiper.Item>)}
                    
                </Swiper>


            </div>
        </div>
    )
}
export default withRouter(VipHomeSchedular)