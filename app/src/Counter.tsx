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


  const incrementCount = () => {
    setCount(count += 1);
    console.log(count)

    if (count === 10) {
      console.log("Add Milestone: " + count);
      document.body.style.backgroundColor = "#3e434e"
    };
  
  }

  const decrementCount = () => {
    setCount(count -= 1);

    if (count === -1) {
      console.log("Sub Milestone: " + count);
      document.body.style.backgroundColor = "#121418"
    };
    
  }

  

  return <div>
    <div className='Text-color'>
      {displayText}
    </div>
    <div className='Button-row'>
      <button onClick={decrementCount} className="Button">SUB</button>
      <button onClick={incrementCount} className="Button">ADD</button>

    </div>
  </div>
}

export default Counter;

