var React = require('react');
var CreateReactClass = require('create-react-class');

var AddItem = CreateReactClass({
  render: function(){
    return(

      <form id="add-todo" className="form-group" onSubmit={this.handleSubmit}>
      <div className="row">
      <div className="col-md-11">
        <input type="text" className="form-control" required ref="newItem"/>
        </div>
        <div class="col-md-1">
        <input type="submit" className="btn btn-success" value="Add"/>
        </div>
        </div>
      </form>

    );
  },

  // Custom function
  handleSubmit: function(e) {
    e.preventDefault();
    console.log("Adding: " + this.refs.newItem.value);
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = null;
  }
});


module.exports = AddItem;
