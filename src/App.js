
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navigation/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Homepage/>

      
    </div>
  );
}

export default App;
