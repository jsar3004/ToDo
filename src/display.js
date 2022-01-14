import * as React from 'react';
import Box from '@mui/material/Box';
import './display.css'
import { Button } from '@mui/material';
import TaskBar from './TaskBar';
import { useState } from 'react';
import  Modal  from 'react-modal';
export default function Display() {
  const [showtasks, setshowtasks] = React.useState(false);
  const [idd,setid]=useState();
  const [ind,setind]=useState();
  const [nam,setnam]=useState();
  const [description,setdescription]=useState();
  const [title,settitle]=useState();
  const[discript,setdiscript]=useState();
  const [todos, setTodos] = useState(() => { 
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {        
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
   function open(id,index,data) {
     setid(id);
     setnam(data.nam);
     setdescription(data.description);
     settitle(data.title);
     setdiscript(data.discript);
    //console.log(idd);
     setshowtasks(true);
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <>
    <div className="mainbox" >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          alignItems:'flex-start',
          // bgcolor: 'background.paper',
        alignSelf:'stretch',
        flexWrap:'wrap',
        }}
      >
         {todos.map((todos,index) => (
        <Button onClick={()=>open(todos.id,index,todos.data)}
    sx={{
        bgcolor:todos.data.nam==="Task"? "#D7AEFB":"#F28B82",
        p: 1,
        m: 1,
        borderRadius: 2,
        // textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        width:300,
        minHeight:100,
        overflow:'hidden',
        cursor:'pointer',
      }}
        >
          {todos.data.title}
          <br/>
          {todos.data.discript}
        </Button>)
         )}
         </Box>
      </div>
          <Modal isOpen={showtasks} onRequestClose={()=>setshowtasks(false)} style={customStyles}>
      <TaskBar onClick={()=>setshowtasks(false)} id={idd} nam={nam} description={description} title={title} discript={discript} task="edit" index={ind} />
      </Modal>
      </>
      
  );
}