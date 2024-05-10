import { useState } from "react";
import {Link} from "react-router-dom"
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
  console.log(data)
 // setName(name);
  }
  return (
    <div className="  text-center w-1/2 mx-auto bg-green-700 rounded-2xl shadow-2xl h-1/2 my-52 pt-10">
      <h1 className="text-white text-3xl font-bold my-2 rounded-2xl bg-blue-600 p-3 w-3/4 mx-auto">
        If you are not registered yet fill the form below
      </h1>
      <div className="border-2 rounded-full bg-blue-600 w-40 mx-auto my-3"></div>
      <form onSubmit={handlesubmit}>
        <div className=" text-white py-10 flex ml-20">
          <div>Full Name :</div>
          <input
            className=" ml-9 border-b-2 border-gray-300/35 w-72 bg-green-700"
            type="name"
            onChange={(e) => setName(e.target.value)}
            value={name}/>
        </div>
        <div className=" ml-20 text-white py-10 flex">
          <div>E-mail :</div>
          <input
            className=" border-b-2 w-72 border-gray-300/35 bg-green-700"
            type="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
        </div>
        <div className=" ml-20 text-white py-10 flex">
          <div>Phone Number :</div>
          <input
            className=" border-b-2 w-72 bg-green-700 border-gray-300/35"
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number} />
        </div>
        <div className="flex items-center">
          <button className=" rounded-3xl bg-blue-600 text-white w-60 my-10 py-4 font-extrabold hover:bg-white hover:text-blue-600" type="submit">
        <Link className="text-white hover:text-blue-600" to="/components/UserList">
        User List
            </Link>
        </button>
        <button className="rounded-3xl h-14 bg-blue-600 text-white w-60 ml-24 py-4 font-extrabold  hover:bg-white hover:text-blue-600">
          Add User
        </button></div>
      </form>
    </div>
  );
};

export default SignUp;