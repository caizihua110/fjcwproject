const CityReducer=(prevState={
    cityName:'全国',cityId:0
},active)=>{
    console.log(active);
 let newState={...prevState}
 switch (active.type) {
    case 'change-city':
        newState.cityName=active.payload.name?active.payload.name:'全国'
        newState.cityId=active.payload.id
        return newState
    default:
        return prevState
 }
}

export default CityReducer