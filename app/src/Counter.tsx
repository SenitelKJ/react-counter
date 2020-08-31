import React from 'react';


export interface CounterProps {
  value?: number;
  label: string;
}

const Counter: React.SFC<CounterProps> = (props) => {

  const displayValue: number = props.value ? props.value : 0;
  const displayText: string = props.label + ": " + displayValue;

  function button() {

    let buttonValue = 0;
    buttonValue++;
    console.log(buttonValue);

  };

  return <div>
    <div className='Text-color'>
      {displayText}
    </div>
    <div className='Button-row'>
      <button onClick={button} className="Button">Increment</button>
    </div>
  </div>
}

export default Counter;
