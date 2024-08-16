import { useState } from 'react'
import './App.css'

function App() {
  const [User, SetUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const [Users, SetUsers] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUser({ ...User, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(User);
    SetUsers([...Users, User]);
    SetUser({
      name: "",
      email: "",
      phone: "",
      password: "",
    })
  }
  return (
    <>
      <div className="container">
        <div className="form" >
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={User.name} onChange={handleChange} />
            <input type="text" name="email" placeholder="Email" value={User.email} onChange={handleChange} />
            <input type="text" name='phone' placeholder='Phone Num' value={User.phone} onChange={handleChange} />
            <input type="text" name="password" placeholder="Password" value={User.password} onChange={handleChange} />
            <button type="submit">Save</button>
          </form>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Users.map((item, index) => (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.password}</td>
                    <td style={{display:"flex"}}><button>Edit</button><button>Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
