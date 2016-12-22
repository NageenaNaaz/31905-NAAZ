var React = require('react');
import Jum from './jum.jsx';
import Jumbo from './jumbo.jsx';
import Getnews from './Getnews.jsx';
export default class favNews extends  React.Component{
  constructor()
  {
    super();
    this.state={arr:[]}
    this.viewFav=this.viewFav.bind(this)
  }

  viewFav(){
  console.log("inside viewfav")
  $.ajax({
   url: "http://localhost:8141/view/viewall",
   type: "GET",
   dataType: 'JSON',
   success : function(msg){
   var arr1=$.map(msg , function(el) { return el })
   this.setState({arr:arr1})
   console.log(msg+"============");
   }.bind(this),
   error: function(err){
   }
  });
  }
  componentDidMount()
  {
    this.viewFav();
    console.log('Component DID MOUNT!');
  }
  render()
  {
    var obj=this.state.arr.map(function(news){
    return(
     <Jumbo data={news} />
    )
    }.bind(this));
    return(
    <div>
        {obj}
    </div>
  );
}
}
