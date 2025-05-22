import Header from './components/Header'
import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Value from './pages/Value'
import Vision from './pages/Vision'
import History from './pages/History'
import Language from './pages/Language'
import Ai from './pages/Ai'
import Study from './pages/Study'
import Talent from './pages/Talent'
import Process from './pages/Process'
import Department from './pages/Department'
import Notice from './pages/Notice'
import Press from './pages/Press'
import Blog from './pages/Blog'
import Sns from './pages/Sns'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />

        {/* COMPANY */}
        <Route path="/company" element={<Navigate to="/company/about" replace />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/company/value" element={<Value />} />
        <Route path="/company/vision" element={<Vision />} />
        <Route path="/company/history" element={<History />} />

        {/* SERVICE */}
        <Route path="/service" element={<Navigate to="/service/language" replace />} />
        <Route path="/service/language" element={<Language />} />
        <Route path="/service/ai" element={<Ai />} />
        <Route path="/service/study" element={<Study />} />

        {/* CAREER */}
        <Route path="/career" element={<Navigate to="/career/talent" replace />} />
        <Route path="/career/talent" element={<Talent />} />
        <Route path="/career/process" element={<Process />} />
        <Route path="/career/department" element={<Department />} />
        <Route path="/career/notice" element={<Notice />} />
        
        {/* RESOURCES */}
        <Route path="/resources" element={<Navigate to="/resources/press" replace />} />
        <Route path="/resources/press" element={<Press />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/sns" element={<Sns />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
