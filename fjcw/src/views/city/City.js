import React, { useEffect, useState } from 'react'
import './City.css'
import axios from 'axios'
import { IndexBar, List } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
 function City(props) {
    const [getHotCityList, setgetHotCityList] = useState([])
    const [getSortedCityList, setgetSortedCityList] = useState([])
    useEffect(() => {
        axios('/api/city/city/getHotCityList?version=6.1.86&referer=2').then(res => {
            setgetHotCityList(res.data.data.hot_city_List)
        })
    }, [])

    useEffect(() => {
        axios('/api/city/city/getSortedCityList?version=6.1.86&referer=2').then(res => {
            setgetSortedCityList(res.data.data)
        })
    }, [])
    return (
        <div className='city-page'>
            <div className='city-title'>城市选择</div>
            <div className='city-position'>
                <span className='city-localization'>城市定位</span>
                <span className='button'>定位</span>
            </div>
            <div className='hot-city'>
                <span className='city-localization'>热门城市</span>
                <ul className='city-name'>
                    <li className='item' onClick={()=>{
                        props.history.push('/home')
                        props.changeCity("全国")
                    }}>全国</li>
                    {getHotCityList.map(item => <li key={item.id} className='item' onClick={()=>{
                        console.log(item);
                        props.history.push('/home')
                        props.changeCity(item)
                    }}>{item.name}</li>)}
                </ul>
            </div>
             <div style={{ height: window.innerHeight }}>
             <IndexBar>
                {Object.entries(getSortedCityList).map(group => {
                    //   const { title, items } = group[1]
                    const { id, list } = group[1]
                    return (
                        <IndexBar.Panel
                            index={id}
                            title={`${id}`}
                            key={`标题${id}`}
                        >
                            <List>
                                {list.map((item, index) => (
                                    <List.Item key={index} onClick={()=>{
                                        props.history.push('/home')
                                        props.changeCity(item)
                                        console.log(item.name);
                                    }}>{item.name}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
             </div>
            
        </div>
    )
}
const mapDipatchToProps={
    changeCity(item){
        return {
            type:'change-city',
            payload:item
        }
    }
}
export default connect(null,mapDipatchToProps)( withRouter(City))
