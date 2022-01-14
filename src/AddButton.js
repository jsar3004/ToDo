import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Taskbar from './TaskBar';
import  Modal  from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color:'black',
    border:'none',
    backgroundColor:"rgba(0, 0, 0, 0)",
  },
};
export default function BasicSelect() {
  const [showtasks, setshowtasks] = React.useState(false);
  const [name,setname]=useState('');
  const[description,setdescription]=useState('');
  function task(name,description){
    setshowtasks(true);
     setname("Task");
     setdescription("Deadline");
  }
  function reminder(name,description){
    setshowtasks(true);
     setname("Reminder");
     setdescription("Timer");
  }
  return (
    <>
    <Box sx={{ minWidth: 20,maxWidth:110,marginLeft:20,marginTop:5,border:0}} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">ADD</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem onClick={task}>Task
          </MenuItem>
          <MenuItem onClick={reminder}>Reminder</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Modal isOpen={showtasks} onRequestClose={()=>setshowtasks(false)} style={customStyles}>
      <Taskbar onClick={()=>setshowtasks(false)} nam={name} description={description} task="create"/>
    </Modal>
    </>
  );
}
