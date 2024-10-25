import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from "../../pages/ProductPage.module.css";
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import EditModal from '../modals/EditModal';

function ProductCard({ product, products, setProducts }) {
  const [isEdit, setIsEdit] = useState(false);
  
  const [editProduct, setEditProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    price: ""
  });

  const editHandler = (id) => {
    setIsEdit(true);
    const productToEdit = products.find((product) => id === product.id);
    setEditProduct(productToEdit);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const id = editProduct.id;
    const newProduct = { ...editProduct, id };
    const newProducts = products.filter((product) => product.id !== id);
    setProducts([...newProducts, newProduct]);
    setIsEdit(false);
  };

  const deleteHandler = (id) => {
    if (window.confirm("آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟")) {
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    }
  };

  return (
    <>
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
            <button onClick={() => editHandler(product.id)}>
              <FaRegEdit style={{ color: "green" }} />
            </button>
            <button onClick={() => deleteHandler(product.id)}>
              <FaRegTrashAlt style={{ color: "red" }} />
            </button>
          </div>
        </td>
      </tr>
      {isEdit && 
        <EditModal 
          setIsEdit={setIsEdit} 
          editProduct={editProduct} 
          setEditProduct={setEditProduct} 
          submitHandler={submitHandler} 
        />}
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default ProductCard;
