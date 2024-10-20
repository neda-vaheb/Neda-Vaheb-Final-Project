import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getProfile } from "../../services/user";

import img from "../../assets/images/Union.png";
import styles from "./Register.module.css";
import { login } from "../../services/auth";
import { setCookie } from "../../utiles/cookie";
// import { useMutation } from "@tanstack/react-query";


function Login() {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });
  

  const changeHandler = (event) => {
    event.preventDefault();
    const name = event.target.name;
    setLoginForm({ ...loginForm, [name]: event.target.value });
  };

  const submitHandler = async(event) => {
    event.preventDefault();
    if (!loginForm.userName || !loginForm.password) {
      toast.error("لطفا تمامی فیلد ها را به درستی وارد نمایید");
    }
const{response ,error} = await login(`${loginForm.userName}` , `${loginForm.password}`);
 console.log({response,error})
    console.log(loginForm);
    navigate("/dashboard");
  setCookie();
  };
  return (
    <>
      <h2 className="header">بوت کمپ بوتو استارت</h2>
      <form
        onChange={changeHandler}
        onSubmit={submitHandler}
        className={styles.formContainer}
      >
        <div className={styles.formHeader}>
          <img src={img} />

          <h4>فرم وود</h4>
        </div>
        <div className={styles.inputs}>
          <input
            value={loginForm.userName}
            name="userName"
            type="text"
            placeholder="نام کاربری"
          />
          <input
            value={loginForm.password}
            name="password"
            type="password"
            placeholder="رمز عبور"
          />
        </div>
        <div className={styles.formButton}>
          <button type="submit"> ورود</button>
          <Link to="/register">ایجاد حساب کاربری؟</Link>
        </div>
      </form>
    </>
  );
}

export default Login;
