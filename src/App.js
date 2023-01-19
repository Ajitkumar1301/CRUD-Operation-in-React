import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './Create'
import Read from './Read'
import Update from './Update'




const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <h1>CRUD Operations</h1>
      <Link to='/create'>create</Link>
      <Link to='/read'>read</Link>
      <Link to='/Update'></Link>
      <Routes>
        <Route path='create' element={<Create />}/>
        <Route path='read' element={<Read />}/>
        <Route path='update' element={<Update />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
