import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import styles from "./Register.module.css";
import { login } from "../services/auth";
import { setCookie } from "../utiles/cookie";
import { useLogin } from "../services/mutations";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const { mutate, data, error } = useMutation(login);

  const changeHandler = (event) => {
    event.preventDefault();
    const name = event.target.name;
    setLoginForm({ ...loginForm, [name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { userName, password } = loginForm;
    if (!userName || !password) {
      return toast.error("لطفا تمامی فیلد ها را به درستی وارد نمایید");
    }

    mutate(userName, password);

    if (data) {
      toast.success("ورود با موفقیت انجام شد");
      setCookie("token", data.data?.token);
      navigate("/");
    }
    if (error) {
      toast.error("خطایی پیش آمده");
    }
  };
  return (
    <>
      <h2 className="header">بوت کمپ بوتو استارت</h2>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <img src="/Union.png" />

          <h4>فرم وود</h4>
        </div>
        <div className={styles.inputs}>
          <input
            value={loginForm.userName}
            name="userName"
            type="text"
            placeholder="نام کاربری"
            onChange={changeHandler}
          />
          <input
            value={loginForm.password}
            name="password"
            type="password"
            placeholder="رمز عبور"
            onChange={changeHandler}
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
