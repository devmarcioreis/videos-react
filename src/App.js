import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Home />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
