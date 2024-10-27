import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
// import PropTypes from "prop-types";

import styles from "../../pages/ProductPage.module.css";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { deleteProduct, putProduct } from "../../services/products";

function ProductCard({ product, products, setProducts }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isdelete, setIsDelete] = useState(false);

  const { mutate } = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("All-Products"),
  });
  const { mutate: editMutate } = useMutation(putProduct, {
    onSuccess: () => queryClient.invalidateQueries("All-Products"),
  });

  const [editProduct, setEditProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
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
    editMutate(newProduct);
  };

  const deleteHandler = () => {
    setIsDelete(true);
  };
  const finalDeleteHandler = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    mutate(id);
  };

  return (
    <>
      <tr key={product.id}>
        <td>
          <div className={styles.cell}>{product.name}</div>
        </td>
        <td>
          <div className={styles.cell}>{product.quantity}</div>
        </td>
        <td>
          <div className={styles.cell}>
            {" "}
            {product.price.toLocaleString()} تومان
          </div>
        </td>
        <td>
          <div className={styles.cell}>{product.id}</div>
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
      {isEdit && (
        <EditModal
          setIsEdit={setIsEdit}
          editProduct={editProduct}
          setEditProduct={setEditProduct}
          submitHandler={submitHandler}
        />
      )}
      {isdelete && (
        <DeleteModal
          setIsDelete={setIsDelete}
          finalDeleteHandler={finalDeleteHandler}
          product={product}
        />
      )}
    </>
  );
}

// ProductCard.propTypes = {
//   product: PropTypes.object.isRequired,
//   products: PropTypes.array.isRequired,
//   setProducts: PropTypes.func.isRequired,
// };

export default ProductCard;
