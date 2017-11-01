var React = require('react');
var CreateReactClass = require('create-react-class');
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


var About = CreateReactClass({
  render: function() {
    return(
      <div className="container jumbotron">
        <Link to={'/'}>Home</Link>
        <h2>First React Application</h2>
        <footer>Copyright &copy; Weyland-Yutani</footer>
      </div>
    );
  }
});

module.exports = About;
