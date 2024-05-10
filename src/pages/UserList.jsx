import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from "react-router-dom"
import { useState } from 'react'

const UserList = () => {
    const [userlist, setUserlist]= useState ([{
        "id": "1",
        "name": "Juliet Oma",
        "email": "julie@yahoo.com",
        "number": "08100000000"
      },
      {
        "id": "2",
        "name": "James Williams",
        "email": "jameswilly@gmail.com",
        "number": "08111111111"
      },
      {
        "id": "3",
        "name": "Ahmed Ali",
        "email": "ahmedali012@gmail.com",
        "number": "09022222222"
      },
      {
        "id": "4",
        "name": "Grace Funsho",
        "email": "gracefunsho@gmail.com",
        "number": "09033333333"
      }])
  return (
    <div><Header />
    <div className="flex-row text-center">
      <button className="border-4 bg-blue-500 rounded-lg text-white mt-7 border-blue-500">
      <Link className="text-white" to="/components/SignUp">
              Add User
            </Link>
          </button>
    {userlist.map((user)=>(
      <div className="text-center w-1/2 mx-auto mt-5" key={user.id}> 
    <div>{user.name}</div>
    <div>{user.email}</div>
    <div>{user.number}</div>
    <div>{user.id}</div>
    <hr className="border border-solid divide-white  " />
      </div>
    ))}
    </div>
    

    <Footer /></div>
  )
}

export default UserList