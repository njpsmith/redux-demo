import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector( state => state.counter );
  const isLogged = useSelector( state => state.isLogged );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      <div>
        Is logged in? {isLogged ? "true" : "false"}
      </div>
    </div>
  );
}

export default App;
