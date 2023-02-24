import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LanguageProvider from './component/Multilanguages/context/langContext'
import Layout from './component/layout/Layout'
import Home from './component/views/Home'
import Contact from './component/views/Contact'
import About from './component/views/About'
import Slider from './component/Slider/Slider'
import Multilanguages from './component/Multilanguages/Multilanguages'
import Multiform from './component/MultiForm/Multiform.jsx'
import Chrono from './component/Chrono/Chrono'
import InfiniteScroll from './component/InfiniteScroll/infiniteScroll'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/multilanguage" element={<Multilanguages />} />
            <Route path="/multiform" element={<Multiform />} />
            <Route path="/chrono" element={<Chrono />} />
            <Route path="/infinite-gallery" element={<InfiniteScroll />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
