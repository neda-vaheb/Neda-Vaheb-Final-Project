import { useState } from "react";
import styles from"./Modal.module.css"
import toast from "react-hot-toast";
import { v4 } from "uuid";
function AddModal({setIsADD , setProducts}) {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        quantity : "",
        price: "",
        
      });
   const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const addProduct = (event) => {
    event.preventDefault();
   
    if (
      !product.name ||
      !product.quantity ||
      !product.price 
      
    ) {
      toast.error("لطفا همه ی فیلد ها را پر کنید");
      return;
    }


    const newProduct = { ...product, id: v4() };
    setProducts((products) => [...products, newProduct]);
    setIsADD(false);
  };
  return (
    <div className={styles.container}>
      <form>
        <h3>ایجاد محصول جدید </h3>
        <div>
        <label htmlFor="name">نام کالا</label>
        <input onChange={changeHandler} name="name" id="name" value={product.name}/>
        </div>
        <div>
        <label htmlFor="quantity">تعداد موجودی</label>
        <input onChange={changeHandler} name="quantity" id="quantity" value={product.quantity}/>
        </div>
        <div>
        <label htmlFor="price">قیمت </label>
        <input onChange={changeHandler} name="price" id="price" value={product.price}/>
        </div>
<div className={styles.editButtons}>
<button onClick={addProduct}> ایجاد </button>
<button onClick={()=>setIsADD(false)}> انصراف </button>


</div>

      </form>
    </div>
  )
}

export default AddModal