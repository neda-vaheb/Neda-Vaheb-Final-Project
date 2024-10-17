import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img from "../../assets/images/Union.png";
import styles from"./Register.module.css";

function Register({setStatus}) {
  const[form ,setForm ] = useState({
    userName:"",
    password:"",
    repeatPasswoard: ""
  })

  const changeHandler = (event)=>{
    event.preventDefault()
    const name = event.target.name;
setForm({...form , [name]: event.target.value});
  }
  const submitHandler = (event)=>{
    event.preventDefault()
    console.log(form)
  }
  return (
    <>
    <h2 className="header">بوت کمپ بوتو استارت</h2>
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <img src={img}/>
       
      <h4>
        فرم ثبت نام 
      </h4>
      </div>
      <div className={styles.inputs}>
        <input value={form.userName} name="userName" type='text' placeholder='نام کاربری'  />
        <input value={form.password} name="password" type="password" placeholder='رمز عبور'/>
        <input value={form.repeatPasswoard} name="repeatPasswoard" type='password' placeholder='تکرار رمز عبور'/>
      </div>
      <div className={styles.formButton}>
      <button type='submit'>ثبت نام</button>
      <Link to="/login">حساب کاربری دارید؟</Link>
      </div>
     
     
    </form>
    </>
  )
}

export default Register
