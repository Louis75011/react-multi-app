import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FirebaseProvider } from './services/configFirebase'
import LanguageProvider from './component/Multilanguages/context/langContext'
import Layout from './component/layout/Layout'
import Home from './component/views/Home'
import LoginForm from './component/views/LoginForm'
import Contact from './component/views/Contact'
import About from './component/views/About'
import Slider from './component/Slider/Slider'
import Multilanguages from './component/Multilanguages/Multilanguages'
import Multiform from './component/MultiForm/Multiform.jsx'
import Chrono from './component/Chrono/Chrono'
import InfiniteScroll from './component/InfiniteScroll/infiniteScroll'
import TodoList from './component/TodoList/TodoList'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <LanguageProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/login-form" element={<LoginForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/slider" element={<Slider />} />
              <Route path="/multilanguage" element={<Multilanguages />} />
              <Route path="/multiform" element={<Multiform />} />
              <Route path="/chrono" element={<Chrono />} />
              <Route path="/infinite-gallery" element={<InfiniteScroll />} />
              <Route path="/todolist" element={<TodoList />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </FirebaseProvider>
    </BrowserRouter>
  )
}

export default App
