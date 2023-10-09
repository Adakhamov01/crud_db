import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './Users'
import CreateUsers from './CreateUsers'
import Updata from './Updata'
import Nav from './Nav'
import NavLog from './NavLog'
import './index.css'
import Login from './Login'
export default function App() {

  const [token, setToken] = useState(localStorage.getItem('nameToken') || 'SignUp')
  useEffect(() => {
    localStorage.setItem('nameToken', token)
  }, [token])
  return (
    <div>
      <BrowserRouter>
        {
          token == 'Success' ? <Nav setToken={setToken} token={token} /> : <NavLog />
        }
        <Routes>

          <Route path='/create' element={<CreateUsers />} />
          <Route path='/users' element={<Users token={token} />} />
          <Route path='/update/:id' element={<Updata />} />
          <Route path='/' element={<Login setToken={setToken} token={token} />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
