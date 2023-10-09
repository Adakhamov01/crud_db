import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
export default function CreateUsers() {
  const [name, setName] = useState("")
  const [lesson, setLesson] = useState("")
  const [tichers, setTichers] = useState("")

  const navigate = useNavigate()

  const Sumbit = (e) => {
    e.preventDefault()


    axios.post('http://localhost:3001/createUsers', { name, lesson, tichers })
      .then(res => {
        navigate("/users")

      }
      )
      .catch(err => console.log(err))

  }
  return (

    <>
      <div style={{ padding: 150 }} className="vh-100 d-flex  justify-content-center align-items-centner  ">

        <div class="todo__wrapper" >
          <div class="todo__content">
            <h1>Add Course</h1>
            <form class="newItem" onSubmit={Sumbit}>
              <div class="newItem__input">
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" name='add' />
                <i id="plus" class="fas fa-plus"></i>
              </div>

              <hr />
              <label>Title Course Idea</label>
              <div class="newItem__input">
                <input type="text" name="add" placeholder="Title" onChange={(e) => setLesson(e.target.value)} />
                <i id="plus" class="fas fa-plus"></i>
              </div>
              <hr />



              <div class="newItem__input">
                <input type="text" name="add" placeholder="Tichers" onChange={(e) => setTichers(e.target.value)} />
                <i id="plus" class="fas fa-plus"></i>
              </div>


              <button className='btn btn-dark' style={{ margin: 10 }}><AiOutlineUserAdd /></button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}
