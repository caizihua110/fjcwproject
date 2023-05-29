import React, { useEffect, useRef, useState } from 'react'
import { NavBar, Popover, Button } from 'antd-mobile'
import {
    MoreOutline,
    UserOutline,
    BankcardOutline,
    RightOutline
} from 'antd-mobile-icons'
import './Vip.css'
import axios from 'axios'
export default function Vip(props) {
    const [vipList, setvipList] = useState([])
    const [vipDiscount, setvipDiscount] = useState([])
    useEffect(() => {
        axios('/api/vip/index/getVipRule?vip_rule_id=1&type=0&version=6.1.86&referer=2').then(res => {
            setvipList(res.data.data.vip_rule_data.equity_list)
            setvipDiscount()
        })
    }, [])
    useEffect(() => {
        axios('/api/vip/index/getDiscountList?page=1&limit=9&version=6.1.86&referer=2').then(res => {
            console.log(res.data.data.list);
            setvipDiscount(res.data.data.list)
        })
    }, [])
    // const calendarPageRef = useRef()
    const actions = [
        { key: 'scan', icon: <BankcardOutline />, text: '主页' },
        { key: 'payment', icon: <UserOutline />, text: '我的聚橙' },
    ]
console.log(vipDiscount);

    return (
        <div className='vip-page' >
            <div className='vip-sider'>常见问题</div>

            <div className='vip-navbar'>
                <NavBar onBack={() => {
                    props.history.goBack()
                }}>
                    VIP + 会员
                </NavBar>
                <div>
                    <Popover.Menu
                        actions={actions}
                        placement='bottom-start'
                        onAction={node => {
                            node.text === '主页' ? props.history.push('/home') : props.history.push('/my')

                        }}
                        trigger='click'
                    >
                        <div className='vip-moreoutline'>
                            <MoreOutline style={{ fontSize: '30px' }}
                            />
                        </div>
                    </Popover.Menu>
                </div>

            </div>
            <div className='vip-desc'>
                <h2 className='vip-title'>VIP + 会员，享受会员权益</h2>
                <div className="vip-tool">
                    <ul className='vip-list' >
                        {vipList.map(item => <li key={item.benefits_name} className='vip-item'>{item.benefits_name}</li>)}
                    </ul>
                    <div style={{ padding: '0 20px' }}>
                        <h2 style={{ color: '' }}>立即开通 99/年</h2>
                    </div>

                    <div className='vip-footer'>
                        <span>权益解读</span>
                        <span>兑换码激活</span>
                    </div>
                </div>
            </div>

            <div className='vip-discount'>
                <h2>专享折扣</h2>
                <span className='right-outline'><RightOutline /></span>
                <ul className='vip-discount-list' >
                    {vipDiscount?.map(item => <li className='vip-discount-item' key={item.schedular_id}>
                        <div className='vip-discount-pic'> < img src={item.pic} /> </div>
                        <p className='vip-discount-title'>
                            {item.schedular_name}
                        </p>
                        <p><span style={{ fontSize: '18px', color: '#ff6743', padding: '3px' }}>{item.min_discount}</span>折起</p>
                    </li>)}
                </ul>
                <div className='vip-show-more'>
                    <span style={{  fontSize: '15px',border:' 1px solid #D79A62',padding:'8px 20px',borderRadius: '8px' }}>查看更多演出<RightOutline /></span>
                </div>
            </div>

            <div className='vip-double-points'>
            <h2>双倍积分</h2>
            <img src='https://m.juooo.com/static/img/vip_plus_double_points.3e1951f.png'/>
            </div>

            <div className='vip-double-points'>
            <h2>全称包邮</h2>
            <img src='https://m.juooo.com/static/img/vip_plus_free_shipping.95caaaa.png'/>
            </div>

            <div className='vip-double-more'>
                <span>更多VIP+尊享权益，敬请期待</span>
            </div>

        </div>
    )
}

