import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosCreate } from 'react-icons/io'
import { AiFillBook } from 'react-icons/ai'
import { IoExitOutline } from 'react-icons/io5'
export default function Nav({ setToken, token }) {
  const handleClerar = () => {
    setToken('SignUp')
  }
  const navigate = useNavigate()

  function exit() {
    navigate("/")
    setToken("SignUp")
  }
  return (
    <div>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <h1 class="navbar-item">Avangard Academy Course Crud</h1>
          {/* <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a> */}

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to='/users' class="navbar-item">
              Home
            </Link>

            <Link to='/create' class="navbar-item">
              <IoIosCreate /> + <AiFillBook />
            </Link>

            <form style={{ margin: 10 }} >

              <button className='btn btn-danger' onClick={exit}><IoExitOutline /></button>
            </form>

            <div class="navbar-item has-dropdown is-hoverable">


              <div class="navbar-dropdown" style={{ textAlign: "center" }}>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {/* <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
