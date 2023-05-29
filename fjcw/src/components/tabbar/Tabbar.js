import React, { useEffect, useRef, useState } from 'react'
import { NavBar, Popover, Button, Toast } from 'antd-mobile'
import {
    MoreOutline, AntOutline,
    UserOutline,
    BankcardOutline,
} from 'antd-mobile-icons'
import './Tabbar.css'
import axios from 'axios'
export default function Tabbar(props) {
    const calendarPageRef = useRef()
    const actions = [
        { key: 'scan', icon: <BankcardOutline />, text: '主页' },
        { key: 'payment', icon: <UserOutline />, text: '我的聚橙' },
    ]

    return (
        <div className='calendar-page' ref={calendarPageRef}>
            <div className='navbar'>
                <NavBar onBack={() => {
                    props.history.goBack()
                }}>
                    {props.children}
                    
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
                        />
                    </Popover.Menu>
                </div>
            </div>

        </div>
    )
}
