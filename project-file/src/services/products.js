import api from "../configs/api";

const getAllProducts = () => {
  return api.get("/products");
};
const postProduct = (data) => {
  const { id, name, price, quantity } = data;
  return api.post("http://localhost:3000/products", {
    id: id,
    name: `${name}`,
    price: price,
    quantity: quantity,
  });
};
const deleteProduct = (id) => {
  return api.delete(`http://localhost:3000/products/${id}`);
};

const putProduct = (data) => {
  const { id, name, price, quantity } = data;
  return api.put(`http://localhost:3000/products/${id}`, {
    name: `${name}`,
    price: price,
    quantity: quantity,
  });
};
export { getAllProducts, postProduct, deleteProduct, putProduct };
