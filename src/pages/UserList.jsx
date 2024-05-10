import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from "react-router-dom"
import { useEffect,useState } from 'react'
import axios from "axios"
const UserList = () => {
    const [userlist, setUserlist]= useState ([])
      useEffect(() => {
        axios
          .get("http://localhost:3000/users")
          .then((res) =>setUserlist (res.data))
          .catch((err) => console.log(err));
      }, []);
      
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