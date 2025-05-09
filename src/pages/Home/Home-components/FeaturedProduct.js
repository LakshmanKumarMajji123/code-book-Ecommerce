// import { ProductCard } from "../../../components/Elements/ProductCard";
import { useState, useEffect } from "react";
import { ProductCard } from "../../../components";

export const FeaturedProducts = () => {
  /**
   * 1. call the API
   * 2. fetch the "data" and show the information dynamically in the "product card"
   */
  //creating a state
  const [products, setProducts] = useState([]); //taking "emptyarray as an Initial state"

  //load the "page" so we using "useEffect"
  useEffect(() => {
    //defining  Async function as "fetchProducts"
    async function fetchProducts() {
      //call the API which is related to "featured products" 
      const response = await fetch("http://localhost:8000/featured_products");  //req to url and fetch the "response(data)"
      const data = await response.json(); //vachina response ni convert into "json"

      //pass the "data" into "setProducts"
      setProducts(data);
    }
    //invoke the func "fetchProducts"
    fetchProducts();

  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">

        {products.map((product) => ( //access to each product so we give parameter "product"
          <ProductCard key={product.id} product={product} />
        ))}

      </div>
    </section>
  )
}
