import React, { useState, useEffect } from 'react';
import './main.css';

const getCurrentTime = (format) => {
  const date = new Date();
  const hours = date.getHours();

  const minutes = 
    date.getMinutes() < 10 
      ? `0${ date.getMinutes() }` 
      : date.getMinutes();

  const seconds = 
    date.getSeconds() < 10 
      ? `0${ date.getSeconds() }` 
      : date.getSeconds();

  return parseInt(format) === 1 ? (
    `${ hours > 12 ? hours - 12 : hours }:${ minutes }:${ seconds }` + 
    `${ hours > 12 ? ' PM' : ' AM' }`) : (
    `${ hours }:${ minutes }:${ seconds }`);
};

const Clock = ({
  bgColor,
  fgColor,
}) => {
  const [time, setTime] = useState(getCurrentTime());
  const [format, setFormat] = useState(0);

  let timeInterval;

  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    clearInterval(timeInterval);

    setTime(getCurrentTime(format)); 
    timeInterval = setInterval(() => {
      setTime(getCurrentTime(format)); 
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [format]);

  return (
    <div className='clock-card' style={{ backgroundColor: bgColor}}>
      <div>
        {/* <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Clock</h2> */}

        <div className='format-radios'>
          <label>
            <input 
              defaultChecked
              type='radio' 
              name='format' 
              value={ 0 }
              onChange={(e) => {
                setFormat(e.target.value);;
              }}
            /> 24hr</label>

          <label>
            <input
              type='radio'
              name='format'
              value={ 1 }
              style={{ marginLeft: '10px' }} 
              onChange={(e) => {
                setFormat(e.target.value);
              }}
            /> 12hr</label>
        </div>

      </div>
      <h2
        className='clock-time'
        style={{ color: fgColor }}
      >{ time }</h2>

      <p style={{ textAlign: 'center'}}>{ timezone }</p>
    </div>
  );
};

export default Clock;