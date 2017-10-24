import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskItem from './TaskItem';

const Tasks = (props) => {
  return (
    <div>
      { props.taskData.map((taskData) =>
        <TaskItem 
          text={taskData.text}
          wall={taskData.wall}
          monster={taskData.monster}
          class={taskData.class}
          key={taskData.key} />
      )}
    </div>
  )
}

export default Tasks;