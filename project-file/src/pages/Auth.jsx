import  { useState } from 'react'
import Register from '../Components/template/Register';
import Login from '../Components/template/Login';

function Auth() {
    const[status , setStatus] = useState(1);//1 no registr //2 registered
 
  return (
    <div>
      {status === 1 && <Register setStatus={setStatus}/> }
      {status === 2 && <Login   setStatus ={setStatus}/> }
    </div>
  )
}

export default Auth
