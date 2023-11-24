import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styled from 'styled-components';


const DeleteModal = ({onCloseModal,confirmDelete,curElem}) => {
  return (
    <>
            <Modal open={true}  onClose={onCloseModal} center  classNames={{
                overlay: 'Overlay',
                modal: 'customModal',
                      }}>
           <StyledAlert>                         
                 <DeletButton onClick={()=>confirmDelete(curElem)} > Confirm </DeletButton>
          </StyledAlert>
            </Modal>
    </>
  )
}
const StyledAlert = styled.div`
  width:100%;
  height:100%;
  display:flex;
  
  justify-content: space-around;
  align-items:center;

`;
const DeletButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#FFCCCB;
height:2.5rem;
width:6rem;
border-radius:20px;
border: none;
cursor: pointer;
&:hover {
  background-color:rgb(255, 0, 0);
  color: #e9ecef;
}`;


export default DeleteModal