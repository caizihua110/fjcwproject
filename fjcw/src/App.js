import logo from './logo.svg';
import './App.css';
import IndexRouter from './router/IndexRouter';
import FooterTabBar from './components/footertabbar/FooterTabBar';
import { connect } from 'react-redux';
function App(props) {
  console.log(props);
  return (
    <div>
       <IndexRouter>
       {props.isShow&&<FooterTabBar></FooterTabBar>}
       </IndexRouter>
      
    </div>
     
    
  );
}
const mapStateToProps=(state)=>{
  console.log(state.TabbarReducer.isShow);
 return{
  isShow:state.TabbarReducer.isShow
 }
}
export default connect(mapStateToProps)( App);
