import React, { useContext, useState } from 'react';
import { ContextValue } from './one';
 

function Two(props) {
  const [people,setPeople]=useState([])
  const [name,setName]=useState('')
const id = useContext(ContextValue)
  const handlesubmit=()=>{
    setPeople([...people,name])
  }

  const Delete=(id)=>{
  
   let type= people.filter((_,i)=>i!== id)
    setPeople(type)
  }
  return (
    <>
    <div>
      {id}
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handlesubmit}>add</button>
    </div>
    {people.map((tt,i)=>{
      return(
        <>
        <p>{tt}</p>
        <button onClick={()=>Delete(i)}>delete</button>
        </>
      )
    })}
    </>
  );
}

export default Two;