import React, { useState } from 'react';

const ArrayLimit = () => {
  const [values, setValues] = useState({
    arrayInput: '',
    limitInput: '',
  });
  const [highest, setHighest] = useState(null);
  const [lowest, setLowest] = useState(null);
  const [sum, setSum] = useState(null);


  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  }

  return (

    <div>
      <label>
        Array:<br />
        <input 
          name='arrayInput'
          type='text' 
          value={ values.arrayInput } 
          onChange={ handleChange }
        />
      </label>
      <br /><br />
      <label>
        Limit:<br />
        <input 
          name='limitInput'
          type='text' 
          value={ values.limitInput } 
          onChange={ handleChange }
        />
      </label>
      <br />
      <br />

      <button type="submit">Calculate</button>

    </div>


  );
}

export default ArrayLimit;