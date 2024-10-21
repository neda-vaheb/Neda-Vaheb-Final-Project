import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import img from ".../assets/images/Union.png";
import styles from"./Register.module.css";
import toast from 'react-hot-toast';
import { register } from '../services/auth';
import { useMutation } from '@tanstack/react-query';

function Register() {
  const[registerForm ,setregisterForm ] = useState({
    userName:"",
    password:"",
    repeatPasswoard: ""
  });
  const{mutate , data,error} = useMutation(register)
const navigate = useNavigate();

  const changeHandler = (event)=>{
    event.preventDefault();

    const name = event.target.name;
setregisterForm({...registerForm , [name]: event.target.value});

  };

  const submitHandler = async(event)=>{
    event.preventDefault();
    if(!registerForm.userName || !registerForm.password || !registerForm.repeatPasswoard  ) {
      toast.error("لطفا تمامی فیلد ها را به درستی وارد نمایید");
      return;
    };
    if(registerForm.password !== registerForm.repeatPasswoard){
      toast.error("تکرار کلمه عبور صحیح نمی باشد");
      return;
    };

  
  mutate (registerForm.userName, registerForm.password);
  if(data){
console.log("success")
    toast.success("ثبت نام با موفقیت انجام شد");
    navigate("/login");

  }
  if(error){
    toast.error("خطایی پیش آمده")
  }
   
  }
  return (
    <>
    <h2 className="header">بوت کمپ بوتو استارت</h2>
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.formContainer}>
      <div className={styles.formHeader}>
        {/* <img src={img}/> */}
       
      <h4>
        فرم ثبت نام 
      </h4>
      </div>
      <div className={styles.inputs}>
        <input value={registerForm.userName} name="userName" type='text' placeholder='نام کاربری'  />
        <input value={registerForm.password} name="password" type="text" placeholder='رمز عبور'/>
        <input value={registerForm.repeatPasswoard} name="repeatPasswoard" type='text' placeholder='تکرار رمز عبور'/>
      </div>
      <div className={styles.formButton}>
      <button type='submit'>ثبت نام</button>
      <Link onClick={()=>setStatus(2)}>حساب کاربری دارید؟</Link>
      </div>
     
     
    </form>
    </>
  )
}

export default Register
