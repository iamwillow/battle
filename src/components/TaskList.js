import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Page, Toolbar } from 'react-onsenui';
import TaskItems from './TaskItems';

export default class TaskList extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    var taskArray = this.state.tasks;

    if( this.textInput.value !== ""){
      taskArray.unshift(
        {
          text: this.textInput.value,
          wall: Math.floor(Math.random() * 4) + 1,
          monster: Math.floor(Math.random() * 5) + 1,
          class: '',
          id: Date.now(),
          key: Date.now()
        }
      );

      this.setState({
        tasks: taskArray
      });

      this.textInput.value = "";
    }
  }

  deleteHandler(id) {
    var newState = this.state.tasks.filter(function( obj ) {
      return (obj.id !== id); // returns array without item
      //return obj.id == id;  // returns only item
    });
    console.log(newState);
    
    this.setState({
      tasks: newState
    });
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='center'>Things I Gotta Do</div>
          </Toolbar>
        }
      >
        <div className="wrapper">
          <form onSubmit={this.addTask}>
            <input 
              type="text"
              ref={(input) => this.textInput = input} 
              placeholder="Enter new item"
              className="text-input">
            </input>

            <button type="submit" className="button">
              Add
            </button>
          </form>

          <TaskItems
            taskData={this.state.tasks}
            deleteHandler={this.deleteHandler.bind(this)}/>
        </div>

      </Page>
    );
  }
}