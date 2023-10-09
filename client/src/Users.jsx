import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaMarker } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { IoIosCreate } from 'react-icons/io'
export default function Users({ token }) {
  const [db, setDb] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(res => {
        setDb(res.data)
      })
      .catch(er => console.log(er))
  }, [])


  const handleDelet = (id) => {
    axios.delete("http://localhost:3001/deleteUser/" + id)
      .then(res => {
        console.log(res);
        window.location.reload()
      })
      .catch(er => console.log(er))
  }

  const navigate = useNavigate()

  return (
    <div className='d-flex vh-100  div justify-content-center align-items-centner'>
      <div className='divs'>
        <Link className='btn btn-primary' to='/create'>
          <IoIosCreate />
        </Link>
        <table className='table' >
          <thead>
            <tr>
              <th>Name</th>
              <th>Title Idea</th>
              <th>Tichers</th>
              <th>Uploute</th>

            </tr>
          </thead>
          <tbody>


            {
              db.map((e) => {
                return (
                  <>
                    <tr>

                      <td>{e.name}</td>
                      <td>{e.lesson}</td>
                      <td>{e.tichers}</td>
                      <td><Link className='btn btn-primary' to={`/update/${e._id}`}><FaMarker /></Link></td>
                      <td><button onClick={(es) => handleDelet(e._id)} className='btn btn-danger' ><FaDeleteLeft /></button></td>
                      {/* <td>{e._id}</td> */}
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
