import React, { useEffect, useState } from 'react'
import Tabbar from '../../components/tabbar/Tabbar'
import axios from 'axios'
import './Show.css'
import { Tabs } from 'antd-mobile'
import { connect } from 'react-redux'
import { show, hide } from '../../creatActive/TabbarActiveCreator'
import { EnvironmentOutline } from 'antd-mobile-icons'
import { Popup} from 'antd-mobile'
import Tab from './tab/Tab'

function Show(props) {

  const time = props.location.state?.myData.time
  const id = props.location.state?.myData.id
  const name = props.location.state?.myData.name
  const sign = props.location.state?.myData.sign

  const [tabContenList, setTabContenList] = useState([])
  const [tabList, settabList] = useState([])
  const [getCityName, setgetCityName] = useState([])
  const [visible, setVisible] = useState(false)
  const [cityName,setcityName]=useState('全国')
  const [cityItem,setcityItem]=useState(null)
  useEffect(() => {
    // axios(`/api/Show/Search/getShowList?city_id=0&category=${id}&keywords=&venue_id=&theatre_id=&start_time=&show_ids=&page=1&referer_type=&time=${time}&version=6.1.86&referer=2&sign=${sign}`).then(res => {
    //   console.log(res.data.data.list);
    //   setTabContenList(res.data.data.list)
    //   console.log(time, id, sign);
    // })
    props.hide()
    return () => {
      props.show()
    }
  }, [])
  useEffect(() => {
    axios('/api/Show/Index/getShowCategoryList?version=6.1.86&referer=2').then(res => {
      settabList(res.data.data)
      
    })
  }, [])
  console.log(props);
  const getCity=()=>{
      axios('/api/city/city/getCityList?version=6.1.86&referer=2').then(res=>{
        setgetCityName(res.data.data.city_list)
      })
      setVisible(true)
    
  }
  const handleCity=(item)=>{
    setcityName(item.name)
    setcityItem(item)
    setVisible(false)
    console.log(item.id,item.name);
  }
  
  return (
    <div className='show-page'>
      <Tabbar {...props} >演出</Tabbar>
      <div className='show-tab'>
        <div className='tab'>
          <Tab tabContenList={tabContenList} name={name} cityItem={cityItem}></Tab>
        </div>
        <div className='show-address' onClick={()=>getCity()}>
          <span>{cityName}</span>
          <span><EnvironmentOutline /></span>
        </div>
      </div>

      <Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false)
              }}
              position='right'
              bodyStyle={{ width: '80vw' }}
            >
              <Address getCityName={getCityName} onChangeCity={handleCity}></Address>
            </Popup>
    </div>
  )
}
const mapDispatchToProps = {
  show,
  hide
}
const mapStateToProps=(state)=>{
  console.log(state);
  return{
    address:'11'
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Show)

function Address(props){
 return(
  <div className='address'>
    <div className='address-title'>城市</div>
    <ul className='address-list'>
    {props.getCityName.map(item=><li className='address-item-name' key={item.id} onClick={()=>{
      props.onChangeCity(item)
    }}>{item.name}</li>)}
    </ul>
  </div>
 )
}