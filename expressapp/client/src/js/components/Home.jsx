import React from 'react';

import ChildComponent from './ChildComponent.jsx';
import Getnews from './Getnews.jsx';


export default class Home extends React.Component{
  constructor()
  {
    super();
    /*for setting the State in parent*/
    this.state={
      "news":[]
    }
  }
  getData()
  {
     /*to give key value pair*/
    this.setState({"news":"e"});
  }



  fetchNewsFromExternalAPI(ele) {
  console.log(ele+"-----------");

   this.setState({"news":ele});
  }
  render()
  {
    return(
      <div>
        <ChildComponent data11={this.fetchNewsFromExternalAPI.bind(this)}/>
        <Getnews data2={this.state.news}/>
        
      </div>
    )
  }
}
