import React from 'react'
import styles from "../../pages/ProductPage.module.css"
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
function ProductCard({product}) {
  const editHandler = ()=>{
    
  }
  return (
    <tr key={product.id}>
    <td>
      <div className={styles.cell}>
        {product.name}
      </div>
    </td>
    <td>
      <div className={styles.cell}>
        {product.quantity}
      </div>
    </td>
    <td>
      <div className={styles.cell}>
        {product.price}
      </div>
    </td>
    <td>
      <div className={styles.cell}>
        {product.id}
      </div>
    </td>
    <td>
      <div>
       
        <button onClick={editHandler}>
        <FaRegEdit  style={{color:"green" }} />

        </button>
        <button>
          <FaRegTrashAlt style={{color:"red" }} />
        </button>
      </div>
    </td>
  </tr>
  )
}

export default ProductCard
