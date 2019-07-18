import React, {Component} from 'react';

import Header from "../components/Header"
import AddTask from "../components/AddTask"

import "./App.css"
import TaskList from '../components/TaskList';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: ["Task1", "Task2", "Task3"],
      taskValue: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onAddTask = this.onAddTask.bind(this);
  }

  onAddTask(event) {
    event.preventDefault();
    const {taskValue, tasks} = this.state;
//    const tasks = this.state.tasks.slice();
//    tasks.push(this.state.taskValue)
    this.setState({
      tasks: [...tasks, taskValue], //tasks: tasks
      taskValue: ""
    })
  }

  onChange(event) {
    this.setState({
      taskValue : event.target.value
    })
  }

  render(){
    return (
      <div>
        <Header className="App-header" message="ToDo List" />
        <h1>Mi lista de pendientes</h1>
        <AddTask
          onAddTask={this.onAddTask}
          taskValue={this.state.taskValue}
          onChange={this.onChange} />
        <TaskList tittle="Tareas" tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
