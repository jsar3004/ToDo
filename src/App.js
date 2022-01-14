import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import FloatingSocialMedia from './FloatingSocialMedia';
// import Box from '@mui/material/Box';
import NativeSelectDemo from './AddButton';
import { Box } from '@material-ui/core';
import Display from './display';
function App() {
  return (
    <>
      <Navbar/> 
      <FloatingSocialMedia/>
       <Box/>
      <NativeSelectDemo/>
      <Display/>
     </>
  )
}
export default App;
