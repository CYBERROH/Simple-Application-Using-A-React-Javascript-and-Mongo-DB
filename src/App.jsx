import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App()
{
  return(
    <div style={{minHeight:'80vh'}}>
      <Router>
        <nav>
          <Link to="/">Home </Link>|&nbsp;
          <Link to="/about">About </Link>
        </nav>
        <Routes>
          <Route path ="/" element={<Home/>}></Route>
          <Route path ="/about" element={<About/>}></Route>

        </Routes>
      </Router>
      
    </div>
  );
}
export default App;