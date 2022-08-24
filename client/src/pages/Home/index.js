import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Home = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'60px'}}>
      <Link to='/problem-1'>Problem 1</Link>
      <Link to='/problem-2'>Problem 2</Link>
      <Link to='problem-3'>Problem 3</Link>
    </div>
  );
}

export default Home;