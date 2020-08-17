import React from 'react';
import TodoItem from './components/todo-item';

function generateRandomId() {
  return Math.random().toString(36).substring(7);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const initialTodo = {
      id: generateRandomId(),
      content: 'Bring Apples',
      done: false
    }
    this.state = {
      todos: {
        [initialTodo.id]: initialTodo
      },
      newTodo: '',
      name: 'Devesh Chaudhary'
    }
  }
  
  render() {
    return (
      <div>
        <h1 style={{fontFamily:'Open Sans', color:'orange', backgroundColor:'lightgreen'}}>
          <center>Todo List Application made by {this.state.name}</center></h1>

        <div className="outer-box">
        <h1 style={{fontFamily:'Open Sans', color:'red'}}><center>Todo App</center></h1>
        <center><input 
          type="text" 
          placeholder="Todo"
          className="input"
          value={this.state.newTodo}
          onChange={(event) => {
            const value = event.target.value
            this.setState({
              newTodo: value
            })
          }}
        />
        </center>

        <center><button className="btn btn-success" id="button" onClick={() => {
 const todo = {
            id: generateRandomId(),
            content: this.state.newTodo,
            done: false
          }
          this.setState({
            todos: {
              ...this.state.todos,
              [todo.id]: todo
            }
          }) 
        }}>
          Add Todo
        </button>
        </center>

        <ol className="down-list" style={{backgroundColor:"pink"}}>
          {/* Data Down Action Up */}
          {Object.values(this.state.todos).map(todo => 
            <TodoItem 
              todo={todo} 
              onCompleted={() => {
                this.setState((prevState) => {
                  const completedTodo = prevState.todos[todo.id]
                  completedTodo['done'] = !completedTodo.done

                  return {
                    todos: {
                      ...prevState.todos,
                      [completedTodo.id]: completedTodo
                    }
                  }
                })
              }}
              onDelete={() => {
                this.setState((prevState) => {
                  const updatedTodos = prevState.todos
                  delete updatedTodos[todo.id]

                  return {
                    todos: updatedTodos
                  }
                })
              }}
            />
          )}
        </ol>
      </div>
      </div>
    );
  }
}

export default App
