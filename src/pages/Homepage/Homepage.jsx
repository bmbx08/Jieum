import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {
  // let count = useSelector((state)=>state.count);
  // const dispatch = useDispatch();

  // const increase= ()=>{
  //   dispatch({type:"INCREMENT"})
  // }

  return (
    <div>
      Homepage
      {/* <div>
        {count}
        <button onClick={increase}>증가!</button>
      </div> */}
    </div>
  )
}

export default Homepage
