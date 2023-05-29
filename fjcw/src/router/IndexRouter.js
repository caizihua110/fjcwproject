import React from 'react'
import  {HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import City from '../views/city/City'
import Search from '../views/search/Search'
import Calendar from '../views/calendar/Calendar'
import My from '../views/my/My'
import Vip from '../views/vip/Vip'
import Show from '../views/show/Show'
import Detail from '../views/showdetail/Detail'
import TourShowInfo from '../views/tourshowinfo/TourShowInfo'
import Theatre from '../views/theatre/Theatre'
import Home from '../views/home/Home'
import Ticket from '../views/ticket/Ticket'
import Login from '../views/login/Login'
export default function IndexRouter(props) {
  return (
    <div >
        <HashRouter>
        {props.children}
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/city' component={City}/>
                <Route path='/my' component={My}/>
                <Route path='/theatre' component={Theatre}/>
                <Route path='/ticket' component={Ticket}/>
                <Route path='/tour/:id' component={TourShowInfo}/>
                <Route path='/detail/:id' component={Detail}/>
                <Route path='/show' component={Show}/>
                <Route path='/vip' component={Vip}/>
                <Route path='/login' component={Login}/>
                <Route path='/search' component={Search}/>
                <Route path='/calendar' component={Calendar}/>
                <Redirect from='/' to='/home'/ >
            </Switch>
        </HashRouter>
    </div>
  )
}
