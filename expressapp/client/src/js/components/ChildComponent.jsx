import React from 'react';
import GrandChild from './GrandChild.jsx';

export default class ChildComponent extends React.Component{
constructor()
{
  super();
  this.state={
  "text":"nnn"
  }
}

data1(a){
 	this.setState({"text":a.target.value});
  console.log(a.target.value+"0000000000000000");
 }




buttonHandler(ell){
  var sourc=this.state.text;
  $.ajax({
   url: "https://newsapi.org/v1/articles?source="+sourc+"&apiKey=1a6eb167d5554ac09aac761a3869d904",
   type: "GET",
   dataType: 'JSON',

   success : function(msg){


this.props.data11(msg.articles);
   console.log(msg.articles+"============");


   }.bind(this),
   error: function(err){
   }
});

}


  render()
  {
    return(
        <div>
          <div className="form-group">
            <input className="form-control input-lg" id="inputlg" type="text" onChange={this.data1.bind(this)}/>
          </div>
            <center><button type="submit" className="btn btn-default" onClick={this.buttonHandler.bind(this)}>
            <span class="glyphicon glyphicon-search"></span> Search
            </button></center>
        </div>
    )
  }
}
