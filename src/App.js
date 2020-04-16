import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbars from './components/Navbars/Navbars'
import Article from './pages/article/Article'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Hireme from './pages/hireme/HireMe'
class App extends Component{
  render(){
    return(
      <Router>
        <Navbars/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Article" component={Article}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/hireme" component={Hireme}/>
        </Switch>
      </Router>
    )
  }
}
export default App;

