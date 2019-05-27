import React, { useState } from 'react';

import ResourceList from "./ResourceList";
import UserList from "./UserList"
const App = () => {
  // currentValue same as this.state.resource same as this.setState({resource:'posts'})
  // setCurrentvalue = useState function from react(intialValue same as state = {resource:'posts'})
  const [resource, setResource] = useState('posts')
  // const [currentCount, setCount] = useState(0)
  return (
    <div>
      <div>
        <p>UserList</p>
      <UserList />
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource ={resource}/>
      
    </div>
  )

}

export default App;
