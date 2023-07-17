import './App.css';
import Box from './component/Box/Box';
import Health from './component/Health/Health';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Health></Health>
       <Box></Box>
       
    </div>
  );
}

export default App;
