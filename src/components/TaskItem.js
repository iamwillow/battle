import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkClass: ["link-box"],
      boomClass: ["boom"]
    };

    this.addClass = this.addClass.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  taskClickHandler(key, e) {
    this.addClass();
    setTimeout(function () {
      this.deleteTask(key, e)
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

  deleteTask(key, e) {
    console.log('complete');
  }

  render() {
    return (
      <div>
        <p
          key={this.props.key}
          className={"todo-item" + " wall-" + this.props.wall}
          onClick={(e) => { this.addClass(1, e) }}>
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


//<img className="link" src={require('../assets/img/link.gif')} />

export default TaskItem;