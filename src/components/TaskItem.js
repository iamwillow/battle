import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkClass: ["link-box"],
      boomClass: ["boom"]
    };

    this.addClass = this.addClass.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  taskClickHandler() {
    this.addClass();
    setTimeout(function () {
      this.deleteTask()
    }.bind(this), 2000);
  }

  addClass() {
    this.setState({
      linkClass: ['link-box', 'animate']
    });
    setTimeout(function () {
      this.setState({
        boomClass: ['boom', 'animate']
      });
    }.bind(this), 1000);
  };

  deleteTask() {
    this.props.deleteHandler(this.props.id);
  }

  render() {
    return (
      <div>
        <p
          className={"todo-item" + " wall-" + this.props.wall}
          onClick={(e) => { this.taskClickHandler() }}>
          {this.props.text}
          <span className={this.state.linkClass.join(' ')} />
          <img
            className="monster"
            src={require('../assets/img/monster-' + this.props.monster + '.gif')} />
          <span className={this.state.boomClass.join(' ')} />
        </p>
      </div>
    );
  }  
}