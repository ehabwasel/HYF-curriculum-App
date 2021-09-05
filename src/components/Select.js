import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Select = () => {
  return (
    <>
      <Link to='/radar'>
        <Button>radar</Button>
      </Link>
      <Link to='/bar'>
        <Button>bar</Button>
      </Link>
    </>
  );
};

export default Select;
