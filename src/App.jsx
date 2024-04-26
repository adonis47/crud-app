import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
const [userlist, setuserlist] = useState([
  {
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
  }
])
  return (
    <>
      <Header />
      {userlist.map((user)=>(
        <div className="text-center w-1/2 mx-auto" key={user.id}> 
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.number}</div>
      <hr className="border border-solid divide-white  " />

        </div>
      ))}
      <Footer />

    </>
  );
}

export default App;
