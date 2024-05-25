import UserList from "../pages/UserList"

const Footer = ({Totaluserlist}) => { 
  return (
    <div className='bg-blue-500 text-xl w-full p-6 text-center text-white'>
        <span className='m-14'>Completed users</span>
        <span className='m-16'>Total userlist : {Totaluserlist}</span>
    </div>
  )
}

export default Footer