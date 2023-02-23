import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Home from './component/views/Home'
import Contact from './component/views/Contact'
import About from './component/views/About'
import Project1 from './component/views/Project1'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/contact" element={<Contact />} />
          <Route path="/project1" element={<Project1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
