var React = require('react');
var CreateReactClass = require('create-react-class');

// Create TodoItem component
var TodoItem = CreateReactClass({
  render: function() {
    return(
      <div>
      <li class="list-group-item">
        <div class="todo-item">
          <span class="item-name">{this.props.item}</span>
          <span class="item-delete" onClick={this.handleDelete}><input type="button" className="btn btn-sm btn-danger pull-right" value="Remove"/> </span>
        </div>
      </li>

      </div>
    )
  },

  // Custom functions
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
