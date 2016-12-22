var React = require('react');
var {Link} = require('react-router');
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-inverse">
     <div className="container-fluid">
     <div className="navbar-header">
       <a className="navbar-brand" href="#">NEWS HEADLINES</a>
     </div>
       <ul className="nav navbar-nav">
           <li className="active"><Link to="/Home">Home</Link></li>
          <li><Link to="/favNews">Favorite News</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
       </ul>
         <ul className="nav navbar-nav navbar-right">
           <li><Link to="/reg"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
           <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
      </div>
     </nav>
   </div>
 );
}
}
