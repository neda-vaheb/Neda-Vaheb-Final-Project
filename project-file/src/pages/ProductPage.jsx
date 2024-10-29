import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/products";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../Components/template/ProductCard";
import Loader from "../Components/template/Loader";
import styles from "./ProductPage.module.css";

import AddModal from "../Components/modals/AddModal";
import SearchBox from "../Components/template/SearchBox";
function ProductPage() {
  const { data, isLoading, isError } = useQuery(
    ["All-Products"],
    getAllProducts
  );

  const [products, setProducts] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  // Set products when data is loaded
  useEffect(() => {
    if (data && data.data.data) {
      setProducts(data.data.data);
    }
  }, [data]);

  if (isError) {
    return toast.error("مشکلی پیش آمده");
  }

  if (isLoading) {
    return <Loader />;
  }
  const addHandler = () => {
    setIsAdd(true);
  };
  return (
    <>
      <div className={styles.productContainer}>
        <SearchBox data={data} setProducts={setProducts} />

        <div className={styles.manageProduct}>
          <div>
            <img src="setting-3.png" />
            <span>مدیریت محصول</span>
          </div>
          <div>
            <button onClick={addHandler}>افزودن محصول</button>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>نام کالا</th>
                <th>موجودی</th>
                <th>قیمت</th>
                <th>شناسه کالا</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) && products.length > 0 ? (
                products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    products={products}
                    setProducts={setProducts}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className={styles.noProduct}>
                    محصولی یافت نشد
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isAdd && <AddModal setIsADD={setIsAdd} setProducts={setProducts} />}
    </>
  );
}

export default ProductPage;
