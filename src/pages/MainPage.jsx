import React, { Component } from "react";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import ListItem from "../cmps/ListItem";
import tasks from "../data/database";
import Footer from "../cmps/Footer";
import Header from "../cmps/Header";
import { nanoid } from "nanoid";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], visibleTasks: [], filter:''};
  }
  componentDidMount() {
    this.setState({ tasks: tasks, visibleTasks: tasks, filter:'All'});
  }
  onChange = (id) => {
    const ChangeTasks = [...this.state.tasks];
    const task = ChangeTasks.find((element) => element.id === id);
    task.completed = !task.completed;
    this.setState({ tasks: ChangeTasks });
  };
  onDelete = (id) => {
    const ChangeTasks = [...this.state.tasks].filter(
      (element) => element.id !== id
    );
    const VisiableTasks = [...this.state.visibleTasks].filter(
      (element) => element.id !== id
    );
    this.setState({ tasks: ChangeTasks, visibleTasks: VisiableTasks });
  };

  showAll = () => {
    this.setState({ visibleTasks: this.state.tasks, filter:'All' });
  };

  showCompleted = () => {
    this.setState({
      visibleTasks: this.state.tasks.filter(
        (element) => element.completed === true
      ),filter: 'Completed'
    });
  };

  showLeft = () => {
    this.setState({
        visibleTasks:this.state.tasks.filter(
            (element) => element.completed === false
        ),filter:'Left'
    })
  };
  onAdd = (text) => {
    const ChangeTasks = [...this.state.tasks];
    ChangeTasks.push({id:nanoid(),text:text,completed:false})
    this.setState({tasks:ChangeTasks,visibleTasks:ChangeTasks,filter:'All'})
    
  }

  render() {
    return (
      <div>
        <Header onAdd={this.onAdd}></Header>
        <ul className="m-0 p-0">
          {this.state.visibleTasks.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              onChange={() => this.onChange(task.id)}
              onDelete={() => this.onDelete(task.id)}
            ></ListItem>
          ))}
        </ul>
        <Footer
          showAll={this.showAll}
          showCompleted={this.showCompleted}
          showLeft={this.showLeft}
          filter = {this.state.filter}
        ></Footer>
      </div>
    );
  }
}
