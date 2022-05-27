import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO, TOGGLE_TODO } from '../../store/actions/actions';
// import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../../store/actions/actions';
// import { EXAMPLE } from '../../store/actions/firstExample';
import FirstExample from '../pure/FirstExample';
import TaskList from './TaskList';

const BoxAction = () => {

  // console.log(EXAMPLE(5, 10));
  // console.log(ADD_TODO('First task'));
  // console.log(ADD_TODO('Second task'));
  // console.log(TOGGLE_TODO(0));
  // console.log(SET_VISIBILITY_FILTER(0));

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(ADD_TODO(e.target.name.value));
  }

  function handleToggle(id) {
    dispatch(TOGGLE_TODO(id));
  }

  return (
    <div>
      <h1>Para pruebas</h1>
      {/* <FirstExample /> */}
      <TaskList toggle={handleToggle} />
      <form onSubmit={handleSubmit}>
        <input id='name' name='name' type='text' />
        <button type='submit'>
          Add task
        </button>
      </form>
    </div>
  );
}

export default BoxAction;
