import { useQuery } from '@tanstack/react-query';
import React from 'react'
import api from '../configs/api';




function Dashboard() {
    const getProduct = async()=>{
const response = await api.get("/products");
return{response};
    }
    const {data} =useQuery(["user-product"] , getProduct)
 console.log({data});
  return (
    <>
      <div>
        <div>
            <input placeholder='جستجو' />
        </div>

        <div>
            نام و نام خانوادگی کاربر 
        </div>

      </div>
      <div></div>
    </>
  )
}

export default Dashboard
