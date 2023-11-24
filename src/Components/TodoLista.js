import React, { useState } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { BiMessageAdd } from 'react-icons/bi';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import "../style.css"
import DeleteModal from './DeleteModal';
import { Spacer } from '../shared';



const TodoLista = () => {
  const [inputdata, setInputdata] = useState('');
  const [items, setItems] = useState([]);
  const [toggleButton,setToggleButton] = useState(true);
  const [editItemId,setEditItemId] = useState("");
  const [deletedItems, setdeletedItems] = useState(null)
  const [modelOpen,setModelOpen] = useState(false);
  const [itemid,setitemid] = useState(null); 
  const [showSeacrhItemDiv,setshowSeacrhItemDiv] =useState('false')
  const [searchItems , setSearchItems] = useState("")

  const searchClick = ()=> {
    if(!searchItems){
      alert("Bhai search main likh to ly khuch")
    }
    else {
     
    }
    setshowSeacrhItemDiv(!showSeacrhItemDiv);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addItem(); // Call addItem when Enter key is pressed
    }
  };

  const undoDelete = () => {
    if(deletedItems){
      setItems((previousItems)=>[...previousItems,deletedItems])
      setdeletedItems(null);
    
      setModelOpen(false);
    }
   }
  const addItem = () => {
    if (!inputdata) {
      alert('Please Fill the Data');
    } else if (inputdata && !toggleButton){
          setItems(items.map((curElem)=>{ 
             if(curElem.id === editItemId){
              return{...curElem,Name:inputdata}
             }
             return curElem;
          }
          ))
          setToggleButton(true);
          setInputdata('');
          setEditItemId(null);
    }
    
     else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        Name: inputdata,
      };
      setItems((previousItems) => [...previousItems, myNewInputData]);
      setInputdata('');
    }
  };

  const confirmDelete = (id) => {
    
    const updatedItems = items.filter((item) => item.id !== id);
    const deletedItem = items.find((item) => item.id === id);
    setItems(updatedItems);
    setdeletedItems(deletedItem);
    
    setModelOpen(false); // Close the modal here
    console.log('Confirm button clicked for item with ID:', id);
  }
  
   
  const deleteItem = () => {
          setModelOpen(true);
  };

//  const undoDelete = () => {
//   if(deletedItems){
//     setItems((previousItems)=>[...previousItems,deletedItems])
//     setdeletedItems(null);
//     setShowUndoAlert(false)
//   }
//  }
  const editItem = (id) => {
    
    const updatedItems = items.find((curElem) =>{
      return curElem.id === id
    });
    setToggleButton(false);
    setInputdata(updatedItems.Name);
    setEditItemId(id);
  };

  return (
    <>
      <Maindiv>
        <Container>
          <Row>
          <Col lg={10} md={10} sm={10}> 
          <Spacer height={3}/>
              <Inputcontainer>
                <SearchField
                  type='text'
                  placeholder='🔍 Search Items'
                  className='form-control'
                  value={searchItems}
                  onChange={(event)=>setSearchItems(event.target.value)}
                />
                <SearchButton onClick={searchClick}>
                      🔍 
                </SearchButton>
              </Inputcontainer>
            </Col>
            {showSeacrhItemDiv && (
               <Col lg={4} md={4} sm={12}>
               <Spacer height={0.5} />
                      <SearchItemDiv>
                        {searchItems &&
                            items.filter(item =>  item.Name.toLowerCase().includes(searchItems.toLowerCase()))
                       .map(filteredItem => (
                        <>
                        <Spacer height={0.5} />
                       <ItemsContainer key={filteredItem.id}>
                         <h2>{filteredItem.Name}</h2>
                       </ItemsContainer>
                        </>
                          ))}
                       </SearchItemDiv>
  </Col>
)}     
          </Row>
          <Spacer height={2}/>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Figure>
                <Img src='./images/todo.png' alt='file' />
                <Figcaption>Add Your List</Figcaption>
              </Figure>
            </Col>
            
            <Col lg={10} md={8}>
            <Spacer height={2}/>
              <Inputcontainer>
                <InputField
                  type='text'
                  placeholder='➕ Add Items'
                  className='form-control'
                  value={inputdata}
                  onChange={(event) => setInputdata(event.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </Inputcontainer>
            </Col>
            <Col lg={1} md={2}></Col>
            <Col lg={1} md={2}>
            <Spacer height={2}/>
              <Button>
              {
                toggleButton ? <StyledIcon onClick={addItem} /> :  
                <StyledIconEdit onClick={addItem} />

              }
             
              </Button>
            </Col>
          </Row>

          {items.map((curElem) => (
            <Row key={curElem.id}>
              <Col lg={10} md={8}>
            <Spacer height={0.5}/>
                <ItemsContainer>
                  <h2>{curElem.Name}</h2>
                </ItemsContainer>
              </Col>
              <Col lg={1} md={2}>
              <Spacer height={0.75}/>
                <Button>
                  <StyledIconEdit onClick={() => editItem(curElem.id )} />
                </Button>
              </Col>
              <Col lg={1} md={2}>
                <Spacer height={0.75}/>
                <Button>
                  <StyledIconDelete 
                  
                   onClick={()=>{

                    setitemid(curElem.id)
                    console.log(curElem.id)
                    deleteItem()}}
                   />
                </Button>
              </Col>
            </Row>
          ))}
          {modelOpen && (
        
            <DeleteModal 
             
                onCloseModal={()=> setModelOpen(false)} 
                undoDelete={undoDelete} 
                confirmDelete={confirmDelete}
               curElem={itemid}
                />       
          )}
        </Container>
      </Maindiv>
    </>
  );
};


const SearchItemDiv = styled.div`
background:##FFFFFF;

`

const SearchButton = styled.div` color: rgb(47, 214, 122);
font-size:0.8rem;
height:2rem;
width:15rem;
border-radius:45%;
background-color:#CBC3E3;
cursor:pointer;
position:relative;
margin-left:93%;
display:flex;
justify-content:center;
align-items:center;
&:hover {
 background-color:#060822;
 
}`

const StyledIconEdit = styled(AiFillEdit)`
 color: rgb(47, 214, 122);
 font-size:2rem;
 cursor:pointer;
`;
const StyledIconDelete = styled(AiFillDelete)`
 color: rgb(47, 214, 122);
 font-size:2rem;
 cursor:pointer;
 &:hover {
  color:#FFCCCB;
  
}
`;


const Button = styled.div`
 display:flex;
 justify-content:center;
 background: #060822;
 border-bottom: 2px solid rgb(47, 214, 122);
 border-radius:1.925rem;
`;
const ItemsContainer = styled.div`
background:white;
color:black;
height:2.5rem;
border: 1px solid black;
display:flex;
border-radius:5px;
`
const Inputcontainer = styled.div`
display:flex;
align-items:center;
`;
const StyledIcon = styled(BiMessageAdd)`
 color: rgb(47, 214, 122);
 font-size:2rem;
 cursor:pointer;
`;

const Figcaption = styled.figcaption`
color:white`;

const Maindiv = styled.div`
 background: #060822;
 height:100vh;
`;
const Figure = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const InputField = styled.input`
`;
const SearchField = styled.input`
position:absolute;
`;
const Img = styled.img`
height:6.25rem;
`;
export default TodoLista


