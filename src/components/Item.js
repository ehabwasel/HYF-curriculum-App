import React from 'react';

const Item = ({ name, value, changeHandler }) => {
  return (
    <>
      <label className ="lable">{name}</label>
      <input
        type='number'
        min='0'
        max='10'
        value={value}
        onChange={changeHandler}
        className='input '
      />
    </>
  );
};

export default Item;
