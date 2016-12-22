  var React = require('react');
  export default class jumbo extends  React.Component{

  constructor()
  {
   super();
   this.delNews=this.delNews.bind(this);

   this.state={
   comment:"tttt"
   }
  }


  delNews(){
  
  $.ajax({
   url: "http://localhost:8141/del/delete",
   type: "DELETE",
   dataType: 'JSON',
   data:this.props.data,

   success : function(msg){
   console.log("NEWS DELETED"+"============");
   }.bind(this),
   error: function(err){
   }
  });
  }

  getComment(e){
  this.setState({comment:e.target.value})
  }


  updateNews(){
  var myobj = {
  title:this.props.data.title,
  comment:this.state.comment
  }
  console.log("in");
  $.ajax({
   url: "http://localhost:8141/up/update",
   type: "PUT",
   data:myobj,

   success : function(msg){
   console.log("NEWS Updated"+"============");
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
            <a id="click" href={this.props.data.url} className="col-xs-12"> <img className="thumbnail col-xs-12"  id="poster" src={this.props.data.urlToImage} width="500" height="400"/></a>
          </div>
          <div className="col-xs-6 ">
            <a id="click" href={this.props.data.url} ><h4>{this.props.data.title}</h4></a>
              <ul className='list-group'>
                  <li className='list-group-item'>Description :{this.props.data.description}</li>
              </ul>


              <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">UPDATE</button>


              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="exampleModalLabel">New message</h4>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label for="recipient-name" className="control-label">COMMENT:</label>
                        <input type="text" className="form-control" id="recipient-name" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.getComment.bind(this)}>Update</button>
                  </div>
                </div>
              </div>
            </div>


          <textArea onChange={this.getComment.bind(this)} />
          <button type="button" className="btn btn-success" onClick={this.updateNews.bind(this)}>Update</button>
          <button type="button" className="btn btn-primary" onClick={this.delNews.bind(this)}>Delete</button>
        </div>
      </div>
    </div>

  
  )
  }
  }
