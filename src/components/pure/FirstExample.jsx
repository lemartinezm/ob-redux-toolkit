import React from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { EXAMPLE } from '../../store/actions/firstExample';

const FirstExample = () => {

  const state = useSelector((state) => state.num);
  const dispatch = useDispatch();

  function handleSubmit(evn) {
    evn.preventDefault();
    // console.log(evn.target.num1.value);
    dispatch(EXAMPLE(parseInt(evn.target.num1.value), parseInt(evn.target.num2.value)));
  }

  return (
    <div>
      <p>
        The actual state is {state}
      </p>
      <form onSubmit={handleSubmit}>
        <input id='num1' name='num1' type='number' />
        <input id='num2' name='num2' type='number' />
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FirstExample;
