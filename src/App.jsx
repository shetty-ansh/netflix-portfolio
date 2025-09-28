import './App.css'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Professional from './pages/Professional'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';  
import Skills from './pages/Skills';  
import Contact from './pages/Contact';  

function App() {
  return (
    <Router>
      <div className="main-page">
        <div id='navbar'> <Navbar></Navbar> </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Professional />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/reachout" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;