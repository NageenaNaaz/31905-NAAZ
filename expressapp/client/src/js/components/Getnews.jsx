import React from 'react';
import Jum from './jum.jsx';
export default class Getnews extends React.Component{
  render()
  {
    var t=this.props.data2;
    var newsarr=t.map(function(news){
      return(
      <Jum  data22={news}/>
      );
    }.bind(this));
    return(
    <div>
      {newsarr}
    </div>
    );
  }
}
