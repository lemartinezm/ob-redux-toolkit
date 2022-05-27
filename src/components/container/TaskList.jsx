import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const TaskList = ({ toggle }) => {
  const tasks = useSelector(state => state)
  return (
    <div>
    <h1>Task List</h1>
      {
        tasks.length > 0 
        ?
        tasks.map(task => (
          <p
          style={task.completed ? {color: 'green'} : {color: 'tomato'}}
          onClick={() => toggle(task.id)}
          key={task.id}
          >{task.id} - {task.name}</p>
        ))
        :
        <p>You don't have pending tasks</p>
      }
    </div>
  );
}

TaskList.propTypes = {
  toggle: PropTypes.func.isRequired
}

export default TaskList;
