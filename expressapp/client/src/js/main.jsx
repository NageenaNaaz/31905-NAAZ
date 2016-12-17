import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, hashHistory, Route, Router, IndexRoute} from 'react-router';

import About from './components/About.jsx';
import mainComponent from './components/mainComponent.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import favNews from './components/favNews.jsx';

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
<Router history={hashHistory}>
             <Route path="/" component={MainComponent} >
             <Route path="/mainComponent" component={mainComponent}/>
             <Route path="/about" component={About}/>
            <IndexRoute component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/favNews" component={favNews}/>
          </Route>

</Router>,document.getElementById('content'));
