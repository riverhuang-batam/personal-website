import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom'
import Navbars from './components/Navbars/Navbars'
import Articledetail from './components/Articledetail/Articledetail'
import Article from './pages/Article/Article'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Hireme from './pages/hireme/HireMe'
function App(){
  
  
    return(
      <Router>
        <Navbars/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Article}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/hireme" component={Hireme}/>
          <Route exact path="/article/:id" component={Articledetail}/>
  
        </Switch>
      </Router>
    )
  
}
export default App;

