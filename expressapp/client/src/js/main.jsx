import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, hashHistory, Route, Router, IndexRoute} from 'react-router';

import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import favNews from './components/favNews.jsx';
import login from './components/login.jsx';
import reg from './components/reg.jsx';


class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>
             <Route path="/" component={MainComponent} >
             <Route path="/Home" component={Home}/>
             <Route path="/about" component={About}/>
             <IndexRoute component={login}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/favNews" component={favNews}/>
             <Route path="/login" component={login}/>
             <Route path="/reg" component={reg}/>
          </Route>

</Router>,document.getElementById('content'));
