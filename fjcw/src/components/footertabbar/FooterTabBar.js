import React from 'react'
import './FooterTabBar.css'
import { NavLink } from 'react-router-dom'
import { MovieOutline , AppstoreOutline,MailOutline,UserOutline } from 'antd-mobile-icons'
export default function FooterTabBar() {
   const bottomList=[{name:'首页',pic:<AppstoreOutline />,url:'/home'},
{name:'剧院',pic:<MovieOutline />,url:'/theatre'},
{name:'票夹',pic:<MailOutline />,url:'/ticket'},
{name:'我的',pic:<UserOutline />,url:'/my'}
]
  return (
    <ul className='footer-list'>
        {bottomList.map(item=><li className='list-item' key={item.name}>
            <NavLink to={item.url} className='list-item-nav' activeClassName='active'>
                <span className='icon'>{item.pic}</span>
                <span className='name'>{item.name}</span>
            </NavLink>
        </li>)}
    </ul>
  )
}
