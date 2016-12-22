var React = require('react');
export default class jum extends  React.Component{
constructor()
{
 super();
 this.saveNews=this.saveNews.bind(this);
}


saveNews(){
$.ajax({
 url: "http://localhost:8141/sav/add1",
 type: "POST",
 dataType: 'JSON',
 data:this.props.data22,

 success : function(msg){
 console.log("NEWS SAVED"+"============");
 }.bind(this),
 error: function(err){
 }
});
}
render(){
return(

<div className = "jumbotron row">
    <div className = "container col-xs-12">
        <div className="col-xs-6 " >
          <a id="click" href={this.props.data22.url} className="col-xs-12"> <img className="thumbnail col-xs-12"  id="poster" src={this.props.data22.urlToImage} width="500" height="400"/></a>
        </div>
        <div className="col-xs-6 ">
          <a id="click" href={this.props.data22.url} ><h4>{this.props.data22.title}</h4></a>
            <ul className='list-group'>
                <li className='list-group-item'>Description :{this.props.data22.description}</li>
            </ul>
        <button type="button" className="btn btn-success" onClick={this.saveNews}>Save</button>
      </div>
    </div>
  </div>
)
}
}
