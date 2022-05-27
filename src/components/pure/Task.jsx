import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_TASK } from '../../store/actions/actions';

const Task = ({ task, filter }) => {

  const dispatch = useDispatch();

  switch (filter) {
    case 'SHOW_ALL':
      return (
        <p
          style={
            {
              color: task.completed ? 'green' : 'tomato',
              textDecorationLine: task.completed ? 'line-through' : 'none'
            }
          }
          onClick={() => dispatch(TOGGLE_TASK(task.id))}
          key={task.id}
        >{task.id} - {task.name}</p>
      );

    case 'SHOW_PENDING':
      console.log()
      if (!task.completed) {
        return (
          <p
            style={
              {
                color: task.completed ? 'green' : 'tomato',
                textDecorationLine: task.completed ? 'line-through' : 'none'
              }
            }
            onClick={() => dispatch(TOGGLE_TASK(task.id))}
            key={task.id}
          >{task.id} - {task.name}</p>
        )
      }
      break;

    case 'SHOW_COMPLETED':
      if (task.completed) {
        return (
          <p
            style={
              {
                color: task.completed ? 'green' : 'tomato',
                textDecorationLine: task.completed ? 'line-through' : 'none'
              }
            }
            onClick={() => dispatch(TOGGLE_TASK(task.id))}
            key={task.id}
          >{task.id} - {task.name}</p>
        )
      }
      break;

    default:
      break;
  }
}

export default Task;
