import  { useState } from 'react'
import Register from '../Components/template/Register';

function Auth() {
    const[status , setStatus] = useState(1);//1 no registr //2 registered
    const[form ,setForm ] = useState({
        userName:"",
        password:"",
        repeatPasswoard: ""
      })
  return (
    <div>
      {status === 1 && <Register form={form} setForm={setForm} setStatus={setStatus}/> }
      {status === 2 && <Login  form={form} setForm={setForm} setStatus ={setStatus}/> }
    </div>
  )
}

export default Auth
