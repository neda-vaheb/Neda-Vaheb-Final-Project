import { useState } from 'react';
import { Link } from 'react-router-dom';

import img from "../../assets/images/Union.png";
import styles from"./Register.module.css";
function Login({ setStatus}) {
  const [loginForm ,setLoginForm]  = useState({
    userName:"",
    password:""
  })

  const changeHandler = (event)=>{
    event.preventDefault()
    const name = event.target.name;
setForm({...loginForm , [name]: event.target.value});
  }
  const submitHandler = (event)=>{
    event.preventDefault()
    console.log(loginForm)
  }
  return (
    <>
    <h2 className="header">بوت کمپ بوتو استارت</h2>
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <img src={img}/>
       
      <h4>
        فرم وود
      </h4>
      </div>
      <div className={styles.inputs}>
        <input value={loginForm.userName} name="userName" type='text' placeholder='نام کاربری'  />
        <input value={loginForm.password} name="password" type="password" placeholder='رمز عبور'/>
      </div>
      <div className={styles.formButton}>
      <button type='submit'> ورود</button>
      <Link to="/register">ایجاد حساب کاربری؟</Link>
      </div>
     
     
    </form>
    </>
  )
}

export default Login
