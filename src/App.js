import React, { useState } from 'react';

function App() {

  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  
  const changeName = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  const getName = () => {
    setFullName(name);
  }

  return (
    <>
    <div className="container">
      <h1>hello {fullName}</h1>
      <input type="text" placeholder="Enter Your Name" onChange={changeName} value={name}/>
      <button onClick={getName}>click me 👍</button>
      </div>
    </>
  );
}

export default App;
