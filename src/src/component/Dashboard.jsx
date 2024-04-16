import React , { useState } from 'react'
const Dashboard = (props) => {
    const name2 = "Madhu";
    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Hello,{props.name}</h1>
      <h3>Hello,{name2}</h3>
      <h3>Count : {count}</h3>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
    </div>
  )
}
export default Dashboard