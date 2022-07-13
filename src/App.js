import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <h1>Prueba Web con react</h1>
    </Router>
  );
}

export default App;
