import React from 'react'
import { EnvironmentOutline, ContentOutline } from 'antd-mobile-icons'
import { Space, SearchBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import './Header.css'
 function Header(props) {
    console.log(props);
    const handleChangeCity= ()=>{
      props.history.push('/city')
    }
    return (
        <div className='header'>
            <div className='header-adress' onClick={()=>{handleChangeCity()}}>
                <Space wrap style={{ fontSize: 25 }}>
                    <EnvironmentOutline />
                </Space>
                <span>{props.cityName}</span>
            </div>

            <div className='header-search' onClick={()=>{
               props.history.push('/search') 
            }}>
                <SearchBar placeholder='请输入内容' />
            </div>

            <div className='header-calendar' onClick={()=>{
                props.history.push('/calendar')
            }}>
                <span>日历</span>
                
                <Space wrap style={{ fontSize: 20 }}>
                <ContentOutline />
                </Space>
            </div>

        </div>
    )
}
const mapStateToProps=(state)=>{

    return{
        cityName:state.CityReducer.cityName
    }
}
export default connect(mapStateToProps,null)(withRouter(Header)) 