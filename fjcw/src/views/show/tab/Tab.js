import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd-mobile'
import axios from 'axios';
import './Tab.css'
import { withRouter } from 'react-router-dom';
function Tab(props) {
    const [tabList, settabList] = useState([])
    const [tabContenList, setTabContenList] = useState([])
    useEffect(() => {
        axios('/api/Show/Index/getShowCategoryList?version=6.1.86&referer=2').then(res => {
            settabList(res.data.data)
        })
    }, [])
    useEffect(()=>{
        axios(`/api/Show/Search/getShowList?city_id=0&category=35&keywords=&venue_id=&theatre_id=&start_time=&show_ids=&page=1&referer_type=&time=1683084524947&version=6.1.86&referer=2&sign=46a38fa66ce1078f8063cafd183a05ff`).then(res => {
            console.log(res.data.data.list);
            setTabContenList(res.data.data.list)
        })
    },[])
    let newState = {
        name: '演唱会',
        city_id: props.cityItem?.id,
        category: 0,
        time: '1683081420606',
        sign: 'a6dd89839cc9c7258dd70832c2e4e39b'
    }
    console.log(props.cityItem?.id);
    const handleItem = (activeKey) => {
        console.log(activeKey)
        switch (activeKey) {
            case '演唱会':
                newState.name = '演唱会';
                    newState.city_id =props.cityItem?.id;
                    newState.category = 35;
                    newState.time = '1683084524947';
                    newState.sign = '46a38fa66ce1078f8063cafd183a05ff';
                    getList(props.cityItem?.id,35,'1683084524947','46a38fa66ce1078f8063cafd183a05ff');
                return newState
            case '音乐会':
                newState.name = '音乐会';
                    newState.city_id = props.cityItem?.id;
                    newState.category = 36;
                    newState.time = '1683081751769';
                    newState.sign = 'a2d536e0649763b616d8edc57e12e4bd';
                    getList(props.cityItem?.id,36,'1683081751769','a2d536e0649763b616d8edc57e12e4bd');
                return newState

            case '话剧歌剧':
                newState.name = '话剧歌剧';
                    newState.city_id =props.cityItem?.id;
                    newState.category = 37;
                    newState.time = '1683081815887';
                    newState.sign = '7fd7dc5032f5325eee0b170e8b8ac7d5';
                    getList(props.cityItem?.id,37,'1683081815887','7fd7dc5032f5325eee0b170e8b8ac7d5');
                return newState
            case '儿童亲子':
                newState.name = '儿童亲子';
                    newState.city_id =props.cityItem?.id;
                    newState.category = 38;
                    newState.time = '1683081914839';
                    newState.sign = '2c9509737c7faaacda5a6b7f64145648';
                    getList(props.cityItem?.id,38,'1683081914839','2c9509737c7faaacda5a6b7f64145648');
                return newState
            case '音乐剧':
                newState.name = '音乐剧';
                    newState.city_id = props.cityItem?.id;
                    newState.category = 79;
                    newState.time = '1683081984012';
                    newState.sign = '089a4e98af3a2e6b29bcf5401047eb70';
                    getList(props.cityItem?.id,79,'1683081984012','089a4e98af3a2e6b29bcf5401047eb70');
                return newState
            case '戏曲综艺':
                newState.name = '戏曲综艺';
                    newState.city_id = props.cityItem?.id;
                    newState.category = 91;
                    newState.time = '1683082039376';
                    newState.sign = 'e189488020793321fb68219f070b209b';
                    getList(props.cityItem?.id,91,'1683082039376','e189488020793321fb68219f070b209b');
                return newState
            case '展览':
                newState.name = '展览';
                    newState.city_id = props.cityItem?.id;
                    newState.category = 99;
                    newState.time = '1683082132136';
                    newState.sign = '082db0afed2c53b98e366e68b595d30d';
                    getList(props.cityItem?.id,99,'1683082132136','082db0afed2c53b98e366e68b595d30d');
                return newState
            case '舞蹈芭蕾':
                newState.name = '舞蹈芭蕾';
                    newState.city_id = props.cityItem?.id;
                    newState.category = 86;
                    newState.time = '1683082244019';
                    newState.sign = 'd9065115a4e393a76822020e3df0bd41';
                    getList(props.cityItem?.id,86,'1683082244019','d9065115a4e393a76822020e3df0bd41');
                return newState
            default:
                
                return newState
        }
        
    }
    
    const getList=(id,categoryId,time,sign)=>{
        axios(`/api/Show/Search/getShowList?city_id=0&category=${categoryId}&keywords=&venue_id=&theatre_id=&start_time=&show_ids=&page=1&referer_type=&time=${time}&version=6.1.86&referer=2&sign=${sign}`).then(res => {
            console.log(res.data.data.list);
            setTabContenList(res.data.data.list)
        })
        
    }
    
    console.log(props);

    return (
        <div>
           

                    <Tabs defaultActiveKey={props.name?props.name:newState.name} onChange={(activeKey) => { handleItem(activeKey) }}  >
            {tabList.map(item => {

                return <Tabs.Tab title={item.name} key={item.name} >
                    <ul className='tab-list' >
                        {tabContenList?.map(item => <li className='recomment-item' key={item.schedular_id} onClick={()=>{
                            props.history.push(`/detail/${item.schedular_id}`)

                        }}>
                            <div style={{ border: '1px solid #ebebeb', borderRadius: '5px' }}>
                                <span className='recomment-address'>{item.city_name}</span>
                                <div className='recommend-pic'>
                                    <img src={item.pic} />
                                </div>
                                <div className='recommend-connent'>
                                    <div className='recommend-title'>
                                        <span style={{ backgroundColor: '#ff6743', padding: '2px 3px', borderRadius: '3px', color: '#fff' }}>主办</span>
                                        <span style={{ fontSize: '15px', marginLeft: '3px' }}>{item.name}</span>
                                    </div>
                                    <div className='recommend-time'>
                                        <span>{item.show_time_top}</span>
                                    </div>
                                    <div className='recommend-price'>
                                        <span style={{ color: '#ff6743', fontSize: '16px' }}>￥{item.min_price} </span><span style={{ color: '#999', fontSize: '11px' }}>起</span>
                                    </div>
                                </div>
                            </div>

                        </li>)}
                    </ul>

                </Tabs.Tab>
            })}

        </Tabs>


        </div>

        
    )
}
export default withRouter(Tab)
