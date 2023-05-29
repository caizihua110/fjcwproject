import React from 'react'
import './ClassifyNav.css'
import { withRouter } from 'react-router-dom';
 function ClassifyNav(props) {
  console.log(props.classifyList);
  const handlePutData=(item)=>{
    let category_id=item.category_id
    let name=item.name
    let newstate={
      time:'1682495121178',
      sign:'db9da6f65701572adc7fd130c67600ef',
      id:category_id,
      name:name
    }
    switch (category_id) {
      case 35:
        newstate.time='1682495121178';
        newstate.sign='db9da6f65701572adc7fd130c67600ef';
        newstate.id=category_id;
        newstate.name=name;
        return newstate;
      case 79:
        newstate.time='1682495858088';
        newstate.sign='9993df3e9a920d72c77079a0ac88acbf';
        newstate.id=category_id;
        newstate.name=name;
        return newstate;
      case 37:
        newstate.time='1682495904092';
        newstate.sign='4d0a0e77a043c114a6474c74f1ba4fc1';
        newstate.id=category_id;
        newstate.name=name;
        return newstate;
      case 38:
        newstate.time='1682495946241';
        newstate.sign='466aeee55b4ce41d823102b70a3fe42e';
        newstate.id=category_id;
        newstate.name=name;
        return newstate;
      case 36:
        newstate.time='1682495987365';
        newstate.sign='b38a4525b01419a0f1d63412eb0f3f5b';
        newstate.id=category_id;
        newstate.name=name;
        return newstate;
      default:
        return newstate;
    }
    // let obj={category_id,id,sign}
    // const strobj= JSON.stringify(obj) 
    //  localStorage.setItem('key',strobj)
  }

  return (
    <div className='classify-nav'>
      {props.classifyList.map(item=><div key={item.id} className='classify-item' onClick={()=>{
        console.log(item);
        
        // handlePutData(item)
        props.history.push({
          pathname:`./show`,
          state: { myData: handlePutData(item) }
        })
      }}>
        <div className='classify-image'>
          <img src={item.pic}></img>
        </div>
        <span className='classify-name'>{item.name}</span>
      </div>)}
    </div>
  )
}
export default withRouter(ClassifyNav)
