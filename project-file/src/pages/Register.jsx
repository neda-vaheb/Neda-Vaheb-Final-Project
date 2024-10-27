import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import img from ".../assets/images/Union.png";
import styles from "./Register.module.css";
import toast from "react-hot-toast";
import { register } from "../services/auth";
import { useMutation } from "@tanstack/react-query";
import { useRegister } from "../services/mutations";

function Register() {
  const [registerForm, setregisterForm] = useState({
    userName: "",
    password: "",
    comfirmPassword: "",
  });
  const navigate = useNavigate();
  // const{mutate} =useRegister();
  const { mutate, data, error } = useMutation(register);

  const changeHandler = (event) => {
    event.preventDefault();

    const name = event.target.name;
    setregisterForm({ ...registerForm, [name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { userName, password, comfirmPassword } = registerForm;

    if (!userName || !password || !comfirmPassword) {
      return toast.error("لطفا تمامی فیلد ها را به درستی وارد نمایید");
    }
    if (password !== comfirmPassword) {
      return toast.error("تکرار کلمه عبور صحیح نمی باشد");
    }

    // mutate(
    //   { userName, password },
    //   {
    //     onSuccess: (data) => {
    //      toast.success("ثبت نام با موفقیت انجام شد")
    //       navigate("/login");
    //     },
    //     onError: (error) =>toast.error("مشکلی پیش آمده"),
    //   }
    // );
    mutate(userName, password);

    if (data) {
      toast.success("ثبت نام با موفقیت انجام شد");
      navigate("/login");
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

          <h4>فرم ثبت نام</h4>
        </div>
        <div className={styles.inputs}>
          <input
            value={registerForm.userName}
            name="userName"
            type="text"
            placeholder="نام کاربری"
            onChange={changeHandler}
          />
          <input
            value={registerForm.password}
            name="password"
            type="text"
            placeholder="رمز عبور"
            onChange={changeHandler}
          />
          <input
            value={registerForm.comfirmPassword}
            name="comfirmPassword"
            type="text"
            placeholder="تکرار رمز عبور"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formButton}>
          <button type="submit">ثبت نام</button>
          <Link to="/login">حساب کاربری دارید؟</Link>
        </div>
      </form>
    </>
  );
}

export default Register;
