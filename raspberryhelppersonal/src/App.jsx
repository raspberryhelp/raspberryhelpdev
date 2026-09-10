import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom';
import './App.css'
import Nav from "./Nav";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import Art from "./pages/Art";
import Widgets from "./pages/Widgets"; 
function PageContent() {
  const location = useLocation();

  return (
    <div className="main-content" key={location.pathname}>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Widgets" element={<Widgets />} />
      </Routes>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <BrowserRouter>
      <div class = "container">
        <Nav></Nav>
        <div class = "main-content">
          <PageContent />
        </div>
      </div>
      </BrowserRouter>
      <Analytics />

      
    </>
  )
}

export default App
