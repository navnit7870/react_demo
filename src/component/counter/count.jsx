// import React, { useState } from 'react';

// function Counter() {
//   // Declare a state variable "count" and a function "setCount" to update it
//   const [count, setCount] = useState(0
    
//   );

//   // Function to increment the count
//   const increment = () => {
//     setCount(count + 1);
//   };

//   // Function to decrement the count
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   // Function to reset the count to 0
//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;


import { useState } from "react";


function Count () {
  const [c,setC] = useState (0);
  function inc(){
    setC(c+1)
  }
  return(
  <>
    <p>{c}</p>
    <button onClick={inc}>increase</button>
  </>
  )

}
export default Count