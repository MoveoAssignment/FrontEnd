import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/NavBar/NavBar'
import { HomePage } from './pages/HomePage/HomePage'
import { Login } from './pages/Login/Login'
import { NoPage } from './pages/NoPage/NoPage'
import { Lobby } from './pages/Lobby/Lobby'
import { CodeBlock } from './pages/CodeBlock/CodeBlock'

function App() {
 
  return (<>
    <BrowserRouter>
    <ResponsiveAppBar/>
      <Routes>
          <Route path="/" element={<ResponsiveAppBar/>}/>
          <Route path="/" element={<HomePage />}/>
          <Route index element={<HomePage />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="codeblock/:id" element={<CodeBlock/>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
    
    
    
  )
}

export default App
