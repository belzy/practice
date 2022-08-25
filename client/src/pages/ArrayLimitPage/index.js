import React, { useState } from 'react';
import './main.css';

// Test Array: [3, 27, 14, 16, 85, 100, 101,2, 7, 49, 33, 12, 29, 63, 8, 88, 73, 75, 6]

const ArrayLimitPage = () => {
  const [values, setValues] = useState({
    arrayInput: '',
    limitInput: '',
  });
  const [highest, setHighest] = useState(null);
  const [lowest, setLowest] = useState(null);
  const [sum, setSum] = useState(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    const arr = JSON.parse(values.arrayInput);
    const limit = parseInt(values.limitInput);

    const [high, low, limitSum] = arr.reduce((acc, val, i) => {
      return [
        acc[0] < val && arr[i] < limit ? val : acc[0],
        val < acc[1] ? val : acc[1],
        val < limit ? (acc[2] + val) : acc[2]
      ];
    }, [0, arr[0], 0]);

    setHighest(high);
    setLowest(low);
    setSum(limitSum);
  }

  return (
    <div className='array-limit-container'>
      <label style={{ marginBottom: '20px' }}>
        Array:<br />
        <input 
          name='arrayInput'
          type='text' 
          value={ values.arrayInput } 
          onChange={ handleChange }
        />
      </label>

      <label style={{ marginBottom: '20px' }}>
        Limit:<br />
        <input 
          name='limitInput'
          type='number' 
          value={ values.limitInput } 
          min="0"
          onChange={ handleChange }
        />
      </label>

      <button 
        type="submit"
        onClick={ handleSubmit }
        style={{ marginBottom: '20px' }}
      >Calculate</button>

      { highest !== null && (<p>Highest: { highest }</p>) }
      { lowest !== null && (<p>Lowest: { lowest }</p>) }
      { sum !== null && (<p>Sum: { sum }</p>) }

    </div>
  );
}

export default ArrayLimitPage;