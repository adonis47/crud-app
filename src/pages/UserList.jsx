import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const UserList = () => {
  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUserlist(res.data))
      .catch((err) => console.log(err));
  }, []);
function handledelete (userid) {
  axios.delete ("http://localhost:3000/users/" + userid )
}

  return (
    <div>
      <Header />
      <div className="flex-row text-center">
        <button className="border-4 bg-blue-500 rounded-lg text-white mt-7 border-blue-500">
          <Link className="text-white" to="/components/SignUp">
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
            <button className="flex-col rounded-lg my-auto bg-blue-600 px-2 hover:text-white">
            <Link className="hover:text-white" to="/components/Updateuser">
                Edit
            </Link>
                
              </button>
              <button className="flex-col rounded-lg my-auto bg-red-400 ml-6 px-2 hover:text-white" onClick={()=> handledelete (user.id)}>
                Delete
              </button>
            </div>
            </div>
            <hr className="border border-solid divide-white  " />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default UserList;
