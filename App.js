import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Mynav'
import { Route,Routes } from 'react-router-dom'
import Prod from './Prod';
import Help from './Help'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import SignUp from './SignUp'
import Cart from './cart';

function App() {
  return (
    <div className="App">
    <Mynav/>
    <Routes>
    <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="help" element={ <Help/> } />
        <Route path="prod" element={ <Prod/> } />
        <Route path="signup" element={ <SignUp/> } />
      
        <Route path="*" element={ <Home/> } />
        
     
    </Routes>
      
    </div>
  );
}

export default App;
