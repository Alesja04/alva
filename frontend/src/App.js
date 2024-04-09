import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pasta from './pages/Pasta.js';
import Suupisted from './pages/Suupisted.js';
import Salatid from './pages/Salatid.js';
import Joogid from './pages/Joogid.js';
import Magusad from './pages/Magusad.js';
// import Header from './components/Header.js';

function App() {
  return (
    <>
    <Router>
			<Routes>
				<Route exact path="/" element={<><Home /><Footer /></>} />
                <Route exact path="/pasta" element={<Pasta/> } />
                <Route exact path="/joogid" element={<Joogid/>} /> 
                <Route exact path="/salatid" element={<Salatid/>} />
                <Route exact path="/suupisted" element={<Suupisted/>} />
                <Route exact path="/magusad" element={<Magusad/>} />
            </Routes>
    </Router>
			
    </>
  );
}

export default App;
