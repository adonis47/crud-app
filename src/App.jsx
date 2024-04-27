import {Route,Routes} from "react-router-dom"
import SignUp from "./components/SignUp";
import UserList from "./components/UserList";
function App() {

  return (
    <>
     <Routes>
        <Route path="components/SignUp" element={<SignUp/>} />
        <Route path="/" element={<UserList/>} />
      </Routes>
    </>
  );
}

export default App;
