const express = require("express")
const mongoose = require("mongoose")
const UsersModel = require('./model/Users')
const cors = require('cors')
const app = express()
const EmployeeModel = require("../Bekcend/model/Employee")



app.use(cors(
  {
    origin: "*"
  }
))




app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/crud')



app.listen(3001, () => {
  console.log('====================================');
  console.log("server post started");
  console.log('====================================');
})




app.get('/getuser/:id', (req, res) => {
  const id = req.params.id
  UsersModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err))

})


// app.delete('/deleteUser/:id', (req, res) => {
//   const id = req.params.id
//   UsersModel.findByIdAndDelete({ _id: id })
//     .then(res => res.json(res))
//     .catch(err => res.json(err))
// })
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id
  UsersModel.findByIdAndDelete({ _id: id })
    .then(res => res.json(res))
    .catch(err => res.json(err))

})


app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id

  UsersModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, lesson: req.body.lesson, tichers: req.body.tichers })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/", (req, res) => {
  UsersModel.find({})
    .then(users => {
      res.json(users)
    })
    .catch(err => res.json(err))

})


app.post('/createUsers', (req, res) => {
  UsersModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})










app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then(employeess => {
      res.json(employeess)
    })
    .catch(err => console.log(err))
})



app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email, password })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("the password incorections")
        }
      } else {
        res.json("No record existed ")
      }
    })
})
