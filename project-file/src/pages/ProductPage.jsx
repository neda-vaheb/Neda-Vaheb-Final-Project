import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/products";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../Components/template/ProductCard";
import Loader from "../Components/template/Loader";
import styles from "./ProductPage.module.css";
import { RiSearchLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
function ProductPage() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError, error } = useQuery(
    ["All-Products"],
    getAllProducts
  );
  console.log({ data });
  const [products, setProducts] = useState([]);

  // Set products when data is loaded
  useEffect(() => {
    if (data && data.data.data) {
      setProducts(data.data.data);
    }
  }, [data]);

  // Filter products based on search input
  useEffect(() => {
    if (data && data.data.data) {
      if (search) {
        const filteredProducts = data.data.data.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(filteredProducts);
      } else {
        setProducts(data.data.data);
      }
    }
  }, [search, data]);

  if (isError) {
    return toast.error("مشکلی پیش آمده");
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.searchBox}>
        <RiSearchLine />
        <input
          placeholder="جستجوی کالا"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div>
          <FaRegCircleUser /> نام و نام خانوادگی کاربر
        </div>
      </div>
      <div className={styles.manageProduct}>
        <div>
          <img src="setting-3.png" />
          <span>مدیریت محصول</span>
        </div>
        <div>
          <button>افزودن محصول</button>
        </div>
      </div>
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
        {!Array.isArray(products) || products.length === 0 ? (
          <div>محصولی یافت نشد</div>
        ) : (
          <tbody>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default ProductPage;
