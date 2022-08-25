import React, { useEffect, useState } from 'react';
import './main.css';

const ColorPicker = (props) => {
  const { onChange } = props;

  const [colorValues, setColorValues] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const handleChange = (e) => {
    setColorValues({ 
      ...colorValues, 
      [e.target.name]: parseInt(e.target.value) 
    });
  };

  useEffect(() => {
    onChange(colorValues);
  }, [colorValues]);

  return (
    <div
      className='color-picker'
    >
      <input
        name='red'
        value={ colorValues.red}
        type='range'
        min="0"
        max="255"
        onChange={ handleChange }
      />

      <input
        style={{ margin: '10px 0px 10px 0px' }}
        name='green'
        value={ colorValues.green }
        type='range'
        min="0"
        max="255"
        onChange={ handleChange }
      />

      <input
        name='blue'
        value={ colorValues.blue }
        type='range'
        min="0"
        max="255"
        onChange={ handleChange }
      />
    </div>
  );
};

export default ColorPicker;