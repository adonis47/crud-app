import {
  FaRegEnvelope,
} from "react-icons/fa";
import {Link} from "react-router-dom"
const SignUp = () => {
  return (
    <div className=" text-center w-1/2 mx-auto bg-green-700 rounded-2xl shadow-2xl h-1/2 my-52 pt-10">
      <h1 className="text-white text-3xl font-bold my-2 rounded-2xl bg-blue-600 p-3 w-3/4 mx-auto">
        If you are not registered yet fill the form below
      </h1>
      <div className="border-2 rounded-full bg-blue-600 w-40 mx-auto my-3"></div>
      <form>
        <div className=" text-white py-10 flex ml-20">
          <div>Full Name :</div>
          <input
            type="Name"
            className=" ml-9 border-b-2 border-gray-300/35 w-72 bg-green-700"
          ></input>
        </div>
        <div className=" ml-20 text-white py-10 flex">
          <div>E-mail :</div>
          <FaRegEnvelope className="text-white mt-1 mx-3" />
          <input
            type="e-mail"
            className=" border-b-2 w-72 border-gray-300/35 bg-green-700"
          ></input>
        </div>
        <div className=" ml-20 text-white py-10 flex">
          <div>Phone Number :</div>
          <input
            type="Phone number"
            className=" border-b-2 w-72 bg-green-700 border-gray-300/35"
          ></input>
        </div>
        <button className=" rounded-3xl bg-blue-600 text-white w-60 my-10 py-4 font-extrabold hover:bg-white hover:text-blue-600">
        <Link className="text-white" to="/componets/UserList">
        User List
            </Link>
        </button>
        <button className="rounded-3xl bg-blue-600 text-white w-60 ml-32 py-4 font-extrabold  hover:bg-white hover:text-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
