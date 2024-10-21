import { useQuery } from '@tanstack/react-query';
import React from 'react'
import api from '../configs/api';
import style from "./Dashboard.module.css"
import { RiSearchLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";



function Dashboard() {
    const getProduct = async()=>{
const response = await api.get("/products");
return{response};
    }
    const {data} =useQuery(["user-product"] , getProduct)
  return (
    <>
      <div className={style.dashboardHeader}>
     
        <div >
        <RiSearchLine /> <input placeholder=' جستجو کالا' />
        </div>
        <div>
          
        <FaRegCircleUser />  نام و نام خانوادگی کاربر 

        </div>
       

      </div>
      <div></div>
    </>
  )
}

export default Dashboard
