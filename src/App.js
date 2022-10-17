
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navigation/Navbar';
import Homepage from './Components/pages/Homepage';
import Books from './Components/pages/Books';
import AddBooks from './Components/AddBooks';
import EditBooks from './Components/EditBooks';
import ViewBooks from './Components/ViewBooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">

<Router>
      <div className='App'>
       <Navbar/>
      <Routes>
           <Route path='/' exact element={ <Homepage />} /> 
           <Route path='/Books' exact element ={<Books/>}/>
          
           <Route path='/AddBooks' exact element={ <AddBooks />} /> 
           <Route path='/EditBooks/:bookid' exact element={<EditBooks/>}/>
           <Route path='/ViewBooks/:bookid' exact element={<ViewBooks/>}/>
           </Routes>
      </div>
      </Router>
      

      
    </div>
  );
}

export default App;
