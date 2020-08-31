import React from 'react';
import './App.css';
import Counter, { CounterProps } from './Counter';

function App() {

  const counterProps:CounterProps = {
    label: "Counter",
    value: 0,
  };

  return <div className='Main-page'>
    <Counter {...counterProps}/>
  </div>;
}

export default App;