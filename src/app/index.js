var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


// Module requires
var TodoItem = require('./todoitem');
var AddItem = require('./additem');
var About = require('./about');

var App = CreateReactClass({
  render: function() {
    return(
      <Router>
        <Switch>
          <Route exact={true} path={'/'} component={TodoComponent} />
          <Route path={'/about'} component={About} />
        </Switch>
      </Router>
    );
  }
});

// Create Todo component
var TodoComponent = CreateReactClass({
  getInitialState: function() {
    return {
      todos: ['Eggs', 'Milk', 'Butter', 'Awesomeness']
    }
  }, // End of getInitialState

  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list" className="container jumbotron">
      <Link to={'/about'}>About</Link>
        <h1>GROCERIES</h1>
        <AddItem onAdd={this.onAdd}/>
        <ul className="list-group">{todos}</ul>
        <footer>Copyright &copy; Weyland-Yutani</footer>
      </div>
    );
  }, // End of Render

  // Custom functions
  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  },

  // Lifecycle functions
  componentWillMount: function(){
    console.log('componenetWillMount');
  },

  componentDidMount: function(){
    console.log('componenetDidMount');
    // good place for getting external data
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate');
  }


});




// Put component into html page
ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));
