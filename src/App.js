
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [resourceType, setResourceType] = useState('posts')

  console.log('render')

  useEffect(()=>{
    console.log('onMount')
  },[])

  return (
    <>
    <div>

    <button onClick={()=> setResourceType('posts')}>Posts</button>
    <button onClick={()=> setResourceType('users')}>Users</button>
    <button onClick={()=> setResourceType('comments')}>Comments</button>
    </div>

    <h1>{resourceType}</h1>
    </>
  );
}

export default App;
