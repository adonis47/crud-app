import { useState } from "react";
import {Route,Routes} from "react-router-dom"
import SignUp from "./pages/SignUp";
import UserList from "./pages/UserList";
import Updateuser from "./pages/Updateuser"
function App() {
  /**const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [number, setNumber] = useState("")

const data = {
  name:name,
  email:email,
  number:number
}
console.log(data)**/
  return (
    <>
    <Routes>
        <Route path="/components/SignUp" element={<SignUp/>} />
        <Route path="/components/UserList" element={<UserList/>} />
        <Route path="/components/Updateuser" element={<Updateuser/>} />
      </Routes>
    </>
  );
}

export default App;
