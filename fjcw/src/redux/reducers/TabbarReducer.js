const TabbarReducer=(prevState={
    isShow:true
},action)=>{
 let newState={...prevState}
 console.log(action);
 switch (action.type) {
    case 'change-show':
        newState.isShow=true
        return newState
        case 'change-hide':
            newState.isShow=false
            return newState
    default:
        return prevState
 }
}
export default TabbarReducer