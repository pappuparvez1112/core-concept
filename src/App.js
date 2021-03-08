import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>this is new work</p>
        {/* <Counter></Counter> */}
        <Users></Users>
        
      </header>
    </div>
  );
}
function Users(){
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data));
  },[])
  return(
    <div>
      <h1>dynamic:{user.lenght} </h1>
      <ul>
        {
          console.log(user)
        }
        {
          user.map(user=><li>{user.email} </li>)
        }
      </ul>
    </div>
  )
}
// function Counter(){
//   const [count,setCount]=useState(0);
//   const handleIncrease=()=>setCount(count+1);

//   return (
//     <div style={{border:'2px solid yellow',margin:'10px',padding:'5px'}}>
//        <h1>count:0{count}</h1>
//        <button onMouseMove={()=>setCount(count+1 )} >increase</button>
//        <button onMouseMove={()=>setCount(count-1 || count>0)}>dicrease</button>
       

//     </div>
//   ) 
// }

export default App;
