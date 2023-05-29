import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Header from './header/Header';
import './Home.css'
import { connect } from 'react-redux';
import ClassifyNav from './classifynav/ClassifyNav';
import VipHomeSchedular from './viphomeschedular/VipHomeSchedular';
import Show from './show-part/ShowPart';
import Recommend from './recommend/Recommend';
import ShowPart from './show-part/ShowPart';


 
 function Home(props) {
  const [classifyList,setClassifyList ]= useState([])
  console.log(props);
    useEffect(()=>{
      axios(`/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.86&referer=2`).then(res=>{
        setClassifyList(res.data.data.classify_list)
      })     
    },[])
    console.log(classifyList);
  return (
    <div className='home'>
      <Header></Header>
      <div className='vip' onClick={()=>{
        props.history.push('/vip')
      }}>
        <div className='image'>
        <img src='https://image.juooo.com/group1/M00/00/1F/rBAAFGAc-DuATLXkAAC9YAWnwZg130.png'></img>
        </div>
      </div>
      <ClassifyNav classifyList={classifyList}></ClassifyNav>
      <VipHomeSchedular></VipHomeSchedular>
      <ShowPart></ShowPart>
      <Recommend></Recommend>
      
    </div>
  )
}

const mapStateToProps=(state)=>{
 
  return {
    cityId:state.CityReducer.cityId
  }
}
export default connect(mapStateToProps,null)(Home)


