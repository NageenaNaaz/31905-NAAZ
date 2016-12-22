var React = require('react');
import {browserHistory, hashHistory, Route, Router, IndexRoute} from 'react-router';
export default class reg extends  React.Component{
constructor()
 {
   super();
   this.state={username:""};
   this.state={password:""};
   this.authenticate=this.authenticate.bind(this);
}
user(x){
   this.setState({username: x.target.value})
 }
 pass(y){
   this.setState({password: y.target.value})
 }
authenticate(){

var userObj={
 username:this.refs.user.value,
 password:this.refs.pass.value
}
  $.ajax({
  url: "http://localhost:8141/users/login",
  type: "POST",
  data:userObj,
  success : function(msg)
  {
  console.log("successfully logged to database");
    alert("succesfully loggedin");
    browserHistory.push('/Home');   
  }.bind(this),
  error: function(err){
  console.log(err);
    alert("check the username and password"+err);
 }.bind(this)
});
}
render()
{
 return(
<div className="container">
    <div className="form-horizontal">
   


    <center><legend>Register Form</legend></center>


    <div className="form-group">
    <label className="col-md-4 control-label" for="textinput">UserName</label>
    <div className="col-md-4">
    <input id="textinput" name="username" type="text" placeholder="" className="form-control input-md" ref="user"/>

    </div>
    </div>


    <div className="form-group">
    <label className="col-md-4 control-label" for="passwordinput">Password</label>
    <div className="col-md-4">
      <input id="passwordinput" name="password" type="password" placeholder="" className="form-control input-md" ref="pass" />

    </div>
    </div>


    <div className="form-group">
    <label className="col-md-4 control-label" for=""></label>
    <div className="col-md-4">
      <center><button id="" name="" className="btn btn-info" onClick={this.authenticate.bind(this)}>Login</button></center>
    </div>
    </div>

    
    </div>
</div>
 );
}
}
