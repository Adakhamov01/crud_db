import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login({ setToken, token }) {
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()





  const navigate = useNavigate()
  const hundlieSubit = (e) => {
    e.preventDefault()


    axios.post('http://localhost:3001/login', { email, password })
      .then(res => {





        if (res.data == "Success") {
          setToken(res.data)
          navigate("/users")
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Siz Roehatan Otingiz'
          })

        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: 'Error password and Email'
          })

        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (token == 'Success') {
      navigate("/users")
    } else {
      navigate("/")
    }
  }, [])
  return (
    <div className='continer'>
      <div className="card">
        <form className='form card' onSubmit={hundlieSubit}>


          <h1 style={{ fontSize: 40 }}>Sign Up</h1>
          <input type="email " onChange={(e) => setEmail(e.target.value)} value={email} placeholder='login ' className='form-control' />
          <input type="password " onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password ' className='form-control' />
          <button className='btn btn-primary'>Let's go</button>
        </form>
      </div>
    </div>
  )
}
