import React, { useState } from 'react'


const TodoList = () => {
  const [inputdata,setInputdata] = useState("");
  const [items,setItems]=useState([]);

  const addItem = () => {
    if(!inputdata) {
      alert("Please Fill the Data");
    }
      else {
        const myNewInputData = {
          id:new Date().getTime().toString(),
          Name:inputdata
        }
        setItems([myNewInputData]);
        setInputdata("");
      }
    }
    //how to delete item
   

    

  //Remove All Function
   const removeAll = ()=>{
    return setItems([]);
   }

  return (
    <>
  <div className='main-div'>
    <div className='child-div'>
        <figure>
            {/* <img src='./images/todo.png' alt='file'></img> */}
            <figcaption>Add Your List </figcaption>
        </figure>
        <div className='addItems' >
          <input 
          type="text"
          placeholder='➕ Add Items'
          className='form-control'
          value={inputdata}
          onChange={(event)=>setInputdata(event.target.value)}
          />
          <i className="fa fa-plus add-btn"  onClick={addItem}></i>
        </div>

        {/* show our Items */}


        <div className='showItems'>
          {items.map((curElem)=>{
             return( <div className="eachItem">
              <h3>{curElem.Name}</h3>
              <div className='todo-btn'>
                <i className="far fa-edit add-btn"></i>
                 <i className="far fa-trash-alt add-btn"></i>
              </div>
           </div>)
          })}
         

        </div>


        {/* Remove all button */}
        <div className='showItems'>
           <button className='btn effect04'  data-sm-link-text="Remove All" onClick={removeAll}> 
           <span>Check List</span>
           </button>
        </div> 
    </div>
  </div>  
    </> 
  )
}
export default TodoList
  