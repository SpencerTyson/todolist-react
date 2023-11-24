import React, {  useState } from 'react'
import { thirdapi } from '../api3'


const Thirdcall = () => {
   
    const [name,setName] = useState();
    const [description,setdescription] = useState();    

  

    const clearControl = () =>{
        setName('');
        setdescription('');
    }
    const thirdrecall = async()=>{
        const third = await thirdapi(name,description)
        console.log("response",third)
    }
    return (
    <>
    <input 
       type='text'
                  placeholder='➕ Add Name'         
                  value={name}
                  onChange={(event) => setName(event.target.value)}
       
    />
        <input 
       type='text'
                  placeholder='➕ Add description'
                  value={description}
                  onChange={(event) => setdescription(event.target.value)}
       
    />
    <button onClick={thirdrecall}>
        Call
    </button>
    <button onClick={clearControl}>
        Clear
    </button>
    </>

  )
}

export default Thirdcall