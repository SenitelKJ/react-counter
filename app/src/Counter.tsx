import React from 'react';
import { useState } from 'react';
import './index.css';


export interface CounterProps {
  value?: number;
  label: string;
}

const Counter: React.SFC<CounterProps> = (props) => {

  const defaultValue: number = props.value ? props.value : 0;
  let [count, setCount] = useState(defaultValue);
  const displayText: string = props.label + ": " + count;

  if (count >= 0 && count < 10) {
    document.body.style.backgroundColor = "#20232a"
  };

  if (count <= -1) {
    document.body.style.backgroundColor = "#14161b"
  };

  if (count > 10) {
    document.body.style.backgroundColor = "#393e4b"
  };


  const changeCount = (x: number) => {
    setCount(count + x);
  }

  // const incrementCount = () => {
  //   changeCount(1);
  // }

  // const decrementCount = () => {
  //   changeCount(-1);
  // }

  return <div>
    <div className='Text-color'>
      {displayText}
    </div>
    <div className='Button-row'>
      <button onClick={() => changeCount(-1)} className="Button" >SUB</button>
      <button onClick={() => changeCount(1)} className="Button" >ADD</button>
    </div>
  </div>
}

export default Counter;

