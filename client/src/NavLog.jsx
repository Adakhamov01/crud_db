import React from 'react'
import { Link } from 'react-router-dom'
export default function NavLog() {
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

            <div class="navbar-item has-dropdown is-hoverable">



            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {/* <Link to='/' ><button className='btn btn-primary'>Login</button></Link> */}
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
