import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Recommend.css'
import { withRouter } from 'react-router-dom'
 function Recommend(props) {
    const [getRecommendList, setgetRecommendList] = useState([])
    useEffect(() => {
        axios(`/api/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&theatre_id=&start_time=&show_ids=&page=1&referer_type=index&time=1682409723590&version=6.1.86&referer=2&sign=0275cf302bba95be27c7e54802abf5dd`).then(res => {
            setgetRecommendList(res.data.data.list)
            console.log(res.data.data.list);
        })
    }, [])
    
    return (
        <div className='recommend-page'>
            <h2>为你推荐</h2>
            <ul className='recommend-list'>

                {getRecommendList?.map(item => <li className='recomment-item' key={item.schedular_id} onClick={()=>{
                   props.history.push(`/detail/${item.schedular_id}`)
                }}>
                    <div style={{border:'1px solid #ebebeb' ,borderRadius:'5px'}}>
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
        </div>
    )
}
export default withRouter(Recommend)
