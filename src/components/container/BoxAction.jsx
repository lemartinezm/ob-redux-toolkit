import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK} from '../../store/actions/actions';
// import { EXAMPLE } from '../../store/actions/firstExample';
// import FirstExample from '../pure/FirstExample';
import TaskList from './TaskList';

const BoxAction = () => {

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(ADD_TASK(e.target.name.value));
  }

  return (
    <div>
      <h1>Para pruebas</h1>
      {/* <FirstExample /> */}
      <TaskList />

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
