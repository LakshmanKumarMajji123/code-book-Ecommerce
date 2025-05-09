/**1. Call the API
 * 2. fatch the information
 * 3. Display in the card
 */

import { useState, useEffect } from "react"
import { Rating } from "../components";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";


export const ProductDetail = () => {

  //create a state
  const [product, setProduct] = useState({}); //here we capturing singleObj so that'why we Taking as a empty "object" in the "useState()" . 
  //here we are going to call individual element (obj)

  //<Route path="/products/:id" element={<ProductDetail />}></Route>
  const { id } = useParams(); //utilize "useParams()" to capture the id which u are given in the "AllRouters.js" (path="/products/:id)

  //create a title dynamically
  useTitle(product.name);

  //load the "page" so we using "useEffect"
  useEffect(() => {
    //defining  Async function as "fetchProducts"
    async function fetchProducts() {
      //call the API which is related to "featured products" 
      const response = await fetch(`http://localhost:8000/products/${id}`);  //req to url and fetch the "response(data)"
      const data = await response.json(); //vachina response ni convert into "json"

      //pass the "data" into "setProducts"
      setProduct(data);
    }
    //invoke the func "fetchProducts"
    fetchProducts();

  }, [id]); //product change aveykodhi "id" ikkada capute chesi useEffect ni "re-render " avela chestham

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating} />
                { /*// <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                // <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                // <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                // <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                // <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>  */}
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
              {product.in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}
              {!product.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
            </p>
            <p className="my-3">
              <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
              {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
