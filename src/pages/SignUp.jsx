import { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios"
const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  function handlesubmit(e) {
    e.preventDefault();

  const data = {
    name:name,
    email:email,
    number:number
  }
  
  axios.post(`http://localhost:3000/users`,  data )
  .then(res => {
   return window.location.href="/components/UserList"
    //console.log(res);
    //console.log(res.data);
  })
 // console.log(data)
 // setName(name);
  }
  return (
    <div className="  text-center w-1/2 mx-auto bg-blue-300 rounded-2xl shadow-2xl h-1/2 my-52 pt-10">
      <h1 className="text-white text-3xl font-bold my-2 rounded-2xl bg-blue-600 p-3 w-3/4 mx-auto">
        If you have not registered yet, fill the form below
      </h1>
      <div className="border-2 rounded-full bg-blue-600 w-40 mx-auto my-3"></div>
      <form onSubmit={handlesubmit}>
        <div className=" justify-between items-center">
        <div className=" text-white py-10  ml-20 flex">
          <div>Full Name :</div>
          <input
            className=" ml-9 border-b-2 border-gray-300/35 w-72 bg-green-700 "
            type="name"
            onChange={(e) => setName(e.target.value)}
            value={name}/>
        </div>
        <div className=" ml-20 text-white py-10 flex">
          <div>Email :</div>
          <input
            className=" border-b-2 w-72 border-gray-300/35 bg-green-700 ml-11 "
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
        </div>
        <div className=" ml-20 text-white py-10 flex">
          <div>Phone Number :</div>
          <input
            className=" border-b-2 w-72 bg-green-700 border-gray-300/35 ml-10"
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number} />
        </div>
        </div>
        <div className="flex items-center">
          <button className=" rounded-3xl bg-blue-600 text-white w-60 my-10 py-4 font-extrabold hover:bg-white hover:text-blue-600" type="submit">
        <Link  to="/components/UserList">
        User List
            </Link>
        </button>
        <button disabled={name==="" || email==="" || number==="" } className="rounded-3xl h-14 bg-blue-600 text-white w-60 ml-24 py-4 font-extrabold  hover:bg-white hover:text-blue-600">
          Add User
        </button></div>
      </form>
    </div>
  );
};

export default SignUp;