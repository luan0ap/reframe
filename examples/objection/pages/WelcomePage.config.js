import React from 'react';
import {endpoints, addContext} from 'wildcard-api/client';
import assert from 'reassert';

export default {
  route: '/',
  view: MainPage,
  getInitialProps,
};

async function getInitialProps(context) {
  if( context.isNodejs ) {
    assert(context.request.headers);
    var {user, todos} = await addContext(endpoints, context.request).getLandingPageData();
  } else {
    var {user, todos} = await endpoints.getLandingPageData();
  }

  if( ! user ) {
    return null;
  }

  return {user, todos};
}

function MainPage(props) {
  if( ! props.user ) {
    return Login(props);
  } else {
    return <TodoList {...props}/>;
  }
}

function Todo({todo, onCompleteToggle}) {
    return (
      <div>
        <input checked={todo.completed} style={{cursor: 'pointer'}} type="checkbox" onChange={onCompleteToggle}/>
        <span style={{textDecoration: todo.completed&&'line-through'}}>{todo.text}</span>
      </div>
    );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: props.todos};
    this.addTodo = this.addTodo.bind(this);
  }
  async onCompleteToggle(todo) {
    const todoUpdated = await endpoints.toggleComplete(todo.id);
    this.setState({
      todos: (
        this.state.todos.map(todo => {
          if( todo.id===todoUpdated.id ) {
            return todoUpdated;
          }
          return todo;
        })
      )
    });
  }
  async addTodo(text) {
    const todo = await endpoints.addTodo(text);
    this.setState({
      todos: [
        ...this.state.todos,
        todo,
      ],
    })
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        {
          this.state.todos.map(todo =>
            <Todo
              todo={todo}
              key={todo.id}
              onCompleteToggle={() => this.onCompleteToggle(todo)}
            />
          )
        }
        <NewTodo addTodo={this.addTodo} />
      </div>
    );
  }
}


class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange({target: {value}}) {
    this.setState({value});
  }

  async handleKeyPress({key}) {
    if( key==='Enter' ) {
      await this.props.addTodo(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          placeholder="Type in new todo and press <Enter>"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          size="30"
        />
      </div>
    );
  }
}

/*
function TodoList({todos, user, toggleComplete}) {
  return (
    <div>
      Hi, <span>{user.username}</span>.
      <h1>Todos</h1>
      { todos.map(todo => Todo(todo, toggleComplete)) }
    </div>
  );
}
*/

function Login() {
  return (
    <div style={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a href='/auth/github'>Login with GitHub</a>
    </div>
  );
}
