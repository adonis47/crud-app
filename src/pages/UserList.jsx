import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const UserList = () => {
  const [userlist, setUserlist] = useState([]);
 const Totaluserlist = userlist.length
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUserlist(res.data))
      .catch((err) => console.log(err));
  }, []);
function handledelete (userid) {
  axios.delete ("http://localhost:3000/users/" + userid )
  .then(res => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUserlist(res.data))
      .catch((err) => console.log(err));})
}

  return (
    <div>
      <Header />
      <div className="flex-row text-center">
        <button className="border-4 bg-green-500 rounded-lg text-white mt-7 border-green-500">
          <Link className="text-whiteS" to="/components/SignUp" >
            Add User
          </Link>
        </button>
        {userlist.map((user) => (
          <div className="text-center w-1/2 mx-36 mt-5" key={user.id}>
            <div className="flex justify-between items-center">
              <div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.number}</div>
              </div>
            <div className="align-middle">
            <button className="flex-col rounded my-auto bg-violet-600 px-2 text-white">
            <Link className="hover:text-white" to="/components/Updateuser" state = {{ from: user}}>
                Edit
            </Link>
                
              </button>
              <button className="flex-row rounded my-auto bg-red-500 ml-6 px-2 text-white" onClick={()=> handledelete (user.id)}>
                Delete
              </button>
            </div>
            </div>
            <hr className="border border-solid divide-white  " />
          </div>
        ))}
      </div>

      <Footer Totaluserlist= {Totaluserlist}/>
    </div>
  );
};

export default UserList;
