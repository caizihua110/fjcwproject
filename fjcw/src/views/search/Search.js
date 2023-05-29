import React, { useEffect, useState } from 'react'
import { SearchBar, Space } from 'antd-mobile'
import './Search.css'
import { DeleteOutline } from 'antd-mobile-icons'
import axios from 'axios'
export default function Search() {
   const [searchHistoryList,setsearchHistoryList]= useState([])
   const [getNewHotWordList,setgetNewHotWordList]= useState([])
   useEffect(()=>{
    axios('/api/Show/Search/getNewHotWord?version=6.1.86&referer=2').then(res=>{
        setgetNewHotWordList(res.data.data)
    })
   },[])

//    https://api.juooo.com/Show/Search/getShowList?city_id=&category=&keywords=%E5%A1%9E%E4%B8%8A%E7%89%A7%E6%AD%8C%E6%83%85&venue_id=&theatre_id=&start_time=&show_ids=&page=1&referer_type=&time=1682251250104&version=6.1.86&referer=2&sign=aa9c97245ccadf77d58a2f2859babc00
//    https://api.juooo.com/Show/Search/getShowList?city_id=&category=&keywords=%E8%AF%9D%E5%89%A7-%E8%8B%8F%E4%B8%9C%E5%9D%A1&venue_id=&theatre_id=&start_time=&show_ids=&page=1&referer_type=&time=1682251289508&version=6.1.86&referer=2&sign=20010ac7d34029975b9a4cb4c9697968
   const handleToDetail=(item)=>{
    console.log(item);
    const encodedString = encodeURIComponent('');
console.log(encodedString);
   }
    return (
        <div className='search'>
            <SearchBar placeholder='请输入内容' showCancelButton={() => true} />
            {searchHistoryList.length>0&&<div className='search-history'>
                <span>历史搜索</span>
                <div className='delete-outline'>
                <Space wrap style={{ fontSize: 18 }}>
                    <DeleteOutline onClick={()=>{
                        setsearchHistoryList([])
                    }} />
                </Space>
                </div>
              <ul>
                    {searchHistoryList.map(item=><li key={item}>{item}</li>)}
                </ul>
                
            </div>}
           
            

            <div className='popular-searches'>
                <span>热门搜索</span>
                <ul className='newhotword-list'>
                    {getNewHotWordList.map(item=><li className='item' key={item.word} onClick={()=>{handleToDetail(item)}}>{item.word}</li>)}
                </ul>
            </div>
        </div>
    )
}
