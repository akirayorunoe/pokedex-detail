import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state?.counter?.value);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default Counter;
