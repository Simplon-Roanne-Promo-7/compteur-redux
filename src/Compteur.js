import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Compteur = () => {
  let dispatch = useDispatch();
  const handleClick = () => {
    console.log("click");
    dispatch(actionIncrement);
  };

  const actionIncrement = {
    type: "INCREMENT",
    payload: 5,
  };

  let count = useSelector((state) => state.counter);

  return (
    <div className='compteur'>
      <h1>Compteur</h1>
      <p>{count}</p>

      <button type='button' onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default Compteur;
