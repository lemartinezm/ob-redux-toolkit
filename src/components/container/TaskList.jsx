import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_VISIBILITY_FILTER } from '../../store/actions/actions';
import Task from '../pure/Task';

const TaskList = () => {
  const tasks = useSelector(state => state.todo);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Task List</h1>
      {
        tasks.length > 0
          ?
          tasks.map(task => (
            <Task task={task} filter={filter} key={task.id}/>
          ))
          :
          <p>You don't have pending tasks</p>
      }

      <div>
        <button onClick={() => dispatch(SET_VISIBILITY_FILTER('SHOW_ALL'))}>
          Show All
        </button>
        <button onClick={() => dispatch(SET_VISIBILITY_FILTER('SHOW_PENDING'))}>
          Show Pending
        </button>
        <button onClick={() => dispatch(SET_VISIBILITY_FILTER('SHOW_COMPLETED'))}>
          Show Completed
        </button>
      </div>
    </div>
  );
}

export default TaskList;
