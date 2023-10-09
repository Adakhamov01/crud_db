import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
export default function Updata() {

  const { id } = useParams()
  const [name, setName] = useState("")
  const [lesson, setLesson] = useState("")
  const [tichers, setTichers] = useState("")

  const navigate = useNavigate()


  const [db, setDb] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getuser/' + id)
      .then(res => {

        setName(res.data.name)
        setLesson(res.data.lesson)
        setTichers(res.data.tichers)
      })
      .catch(er => console.log(er))
  }, [])
  const Update = (e) => {
    e.preventDefault()


    axios.put('http://localhost:3001/updateUser/' + id, { name, lesson, tichers })
      .then(res => {
        navigate("/users")

      }
      )
      .catch(err => console.log(err))

  }

  return (
    // <div className='d-flex vh-100 bg-primary justify-content-center align-items-centner'>

    //   <div className='w-50 bg-white rounded p-3'>

    //     <h1>updata cors</h1>
    //     <form onSubmit={Update}>



    //       <div className="mb-2">

    //       </div>


    //       <div className="mb-2">

    //       </div>


    //       <div className="mb-2 ">

    //       </div>
    //       <button className='btn btn-primary'>sumbit</button>
    //     </form>
    //   </div>
    // </div>
    <div style={{ padding: 150 }} className="vh-100 d-flex  justify-content-center align-items-centner  ">
      <div class="todo__wrapper" >
        <div class="todo__content">
          <h1>Add Course</h1>
          <form class="newItem" onSubmit={Update}>
            <div class="newItem__input">
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} name='add' placeholder='name' />


              <i id="plus" class="fas fa-plus"></i>
            </div>

            <hr />
            <label>Title Course Idea</label>
            <div class="newItem__input">
              <input type="text" onChange={(e) => setLesson(e.target.value)} value={lesson} name='add' placeholder='lesson' />

              <i id="plus" class="fas fa-plus"></i>
            </div>
            <hr />



            <div class="newItem__input">
              <input type="text" onChange={(e) => setTichers(e.target.value)} value={tichers} name='add' placeholder='tilti' />
              <i id="plus" class="fas fa-plus"></i>
            </div>


            <button className='btn btn-dark' style={{ margin: 10 }}>Add+</button>
          </form>

        </div>
      </div>
    </div>
  )
}
