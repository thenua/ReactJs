import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {
   render() {
return <p style={{fontSize:20, color:"blue"}}><b><li id="list">
{this.props.todo.content}
<button className="btn btn-danger" id="delete-btn" onClick={this.props.onDelete}>Delete</button>
<button className="btn btn-primary" id="done-btn" onClick={this.props.onCompleted}>
  {this.props.todo.done ? "Undone" : "Done" }
</button>
</li>
</b>
    </p>
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onCompleted: PropTypes.func,
  onDelete: PropTypes.func
}
export default TodoItem