import React, { useEffect, useRef, useState } from 'react'
import { NavBar, Popover, Button, Toast } from 'antd-mobile'
import {
    MoreOutline, AntOutline,
    UserOutline,
    BankcardOutline,
} from 'antd-mobile-icons'
import './Calendar.css'
import axios from 'axios'
export default function Calendar(props) {
   const [getShowCategoryList,setgetShowCategoryList] =useState([])
    const calendarPageRef = useRef()
    const actions = [
        { key: 'scan', icon: <BankcardOutline />, text: '主页' },
        { key: 'payment', icon: <UserOutline />, text: '我的聚橙' },
    ]

    useEffect(()=>{
        axios('/api/Show/Index/getShowCategoryList?version=6.1.86&referer=2').then(res=>{
            console.log(res.data.data);
            setgetShowCategoryList(res.data.data)
        })
    },[])

    return (
        <div className='calendar-page' ref={calendarPageRef}>
            <div className='navbar'>
                <NavBar onBack={() => {
                    props.history.goBack()
                }}>
                    演出日历
                </NavBar>
                <div className='navbar-moreoutline'>
                    <Popover.Menu
                        actions={actions}
                        placement='bottom-start'
                        onAction={node => {
                            node.text === '主页' ? props.history.push('/home') : props.history.push('/my')

                        }}
                        trigger='click'
                    >
                        <MoreOutline style={{ fontSize: '30px' }}
                        // onClick={()=>{
                        //     console.log(calendarPageRef.current.style.background='rgba(0,0,0,0.5)');
                        // }} 
                        />
                    </Popover.Menu>
                </div>
            </div>
            <div className='show-category'>
                <ul>
                </ul>
            </div>

        </div>
    )
}
