import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBye, setHello } from '../redux/slices/greeting';



const Main = () => {
  const { greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        {greeting}
      </h2>
      <button className='btn btn-primary' onClick={() => dispatch(setHello())}>Say Hello</button>
      <button className='btn btn-danger' onClick={() => dispatch(setBye())}>Say Bye</button>
    </div>
  );

}

export default Main;