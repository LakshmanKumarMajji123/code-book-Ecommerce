// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { ProductCard } from "../../components";
// import { FilterBar } from "./Products-Components/FilterBar";

// export const ProductsList = () => {
//   const [show, setShow] = useState(false);
//   const [products, setProducts] = useState([]);
//   const search = useLocation().search;
//   const searchTerm = new URLSearchParams(search).get("q");
//   console.log(searchTerm);

//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch(
//         `http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ""}`
//       );
//       const data = await response.json();
//       setProducts(data);
//     }
//     fetchProducts();
//   }, [searchTerm]); // Add searchTerm here


//   return (
//     <main>
//       <section className="my-5">
//         <div className="my-5 flex justify-between">
//           <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
//           <span>
//             <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
//               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
//             </button>
//           </span>
//         </div>

//         <div className="flex flex-wrap justify-center lg:flex-row">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {show && <FilterBar setShow={setShow} />}

//     </main>
//   )
// }



// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { ProductCard } from "../../components";
// import { FilterBar } from "./Products-Components/FilterBar";

// export const ProductsList = () => {
//   const [show, setShow] = useState(false);
//   const [products, setProducts] = useState([]);
//   const search = useLocation().search;
//   const searchTerm = new URLSearchParams(search).get("q");
//   console.log(searchTerm);

//   useEffect(() => {
//     async function fetchProducts() {
//       if (!searchTerm) {
//         setProducts([]); // Optionally set to an empty list if no search term
//         return;
//       }

//       console.log(`Fetching products with: http://localhost:8000/products?name_like=${searchTerm}`);
//       const response = await fetch(
//         `http://localhost:8000/products?name_like=${searchTerm || ""}`
//       );
//       const data = await response.json();
//       setProducts(data);
//     }
//     fetchProducts();
//   }, [searchTerm]);

//   return (
//     <main>
//       <section className="my-5">
//         <div className="my-5 flex justify-between">
//           <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
//             All eBooks ({products.length})
//           </span>
//           <span>
//             <button
//               onClick={() => setShow(!show)}
//               id="dropdownMenuIconButton"
//               className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
//               type="button"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
//               </svg>
//             </button>
//           </span>
//         </div>

//         <div className="flex flex-wrap justify-center lg:flex-row">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {show && <FilterBar setShow={setShow} />}
//     </main>
//   );
// };








import { useEffect, useState } from "react";
//import { ProductCard } from "../../components/Elements/ProductCard";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { ProductCard } from "../../components";
import { FilterBar } from "./Products-Components/FilterBar";
import { useFilter } from  "../../context";

export const ProductsList = () => {

  const { products, initialProductList } = useFilter();

  //creating a state for "filterbar"
  const [show, setShow] = useState(false);

  //creating a state for "products"
  //const [products, setProducts] = useState([]); //takes an empty array as an "initial state"

  //search products by querySearch
  const search = useLocation().search;
  //nvu url lo ichina path (http://localhost:3000/products?q=react) ni access chytaniki "useLocation()" use chyali
  //uselocation().serach --> pakana ".search" include chesthe only nuv url lo ichna querySearch matrame kanipistundi like "?q = react"

  const searchTerm = new URLSearchParams(search).get("q"); //simply it returns the value associated with the "q"
  //by using "URLSearchParams" to access the "individaul terms" like q by passing querySearch (search)
  console.log("searchterm is...", searchTerm);//so that'show we have information about "queryTerm"

  /**ikkada searchTerm "null" vasthe then it show all products url should be normal
   * or else searchTerm is attached to url
   */

  //useTitle to update the title dynamically
  useTitle("product list page");


  //load the "page" so we using "useEffect"
  useEffect(() => {
    //defining  Async function as "fetchProducts"  
    async function fetchProducts() {
      //call the API which is related to "featured products"
      const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ""}`); //url lo ila unte(?q= ) then "searchTerm" or else empty ""   //req to url and fetch the "response(data)"
      //const response = await fetch("http://localhost:8000/products?q=Python");
      //const response = await fetch("http://localhost:8000/products");
      const data = await response.json(); //vachina response ni convert into "json"
      console.log("response is...", data);
      //pass the "data" into "setProducts"
      //setProducts(data);

      /**API nundi vachina data ni "initialProductList(data)" ki pass chesi 
       * nxt context & reducer process avtundi 
       * after ---> indulo unna productList ni data tho fill chestunam const { productList, initialProductList } = useFilter();
       * this "productList" holds all produts. when i call this below func "initialProductList(data)"   */

      initialProductList(data); //in this also we pass the "data" which is come form API
    }
    //invoke the func "fetchProducts"
    fetchProducts();

  }, [searchTerm]); //searchTerm

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
          <span>
            <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => ( //access to each product so we give parameter "product"
            <ProductCard key={product.id} product={product} />
          ))}

        </div>
      </section>

      {show && <FilterBar setShow={setShow} />}

    </main>
  )
}


/**1. http://localhost:8000/products?name_like= ""
 *      ?name_like="" means it show all the products
 * 
 * 2. nvu once url lo ila search chesthe ---> (http://localhost:3000/products?q=react) then
 *    in our code we access ur path location by using -----> "useLocation().search" 
 *    and get the individual term and passigng above querySearch ----->  URLSearchParams(search).get('q');
 * 
 * 3. hear we use terinary Operator 
 *   if we search anything in url then ur api will be http://localhost:8000/products?name_like=react
 * or else it is empty "" then show all the products. http://localhost:8000/products?name_like= ""
 * 
  byusing Terniary Operator both api Url's in single line--> 
           `http://localhost:8000/products?name_like= ${searchTerm ? searchTerm : ""}`
 */

/**
 *   {show && <FilterBar /> }
 * when show is "true" then navigae to <FilterBar /> component
 * --------------------------------------------------------
 * 
 * task
 * -----
 * IN filter there is a close(x) button at top of the filter 
 * u click that close(x) icon filter should be closed 
 * 
 * 1. we pass "setState" as a prop in the <FilterBar setshow = {setshow} />
 *       {show && <FilterBar />}
 * 2. In FilterBar.js we just want to close the filter so we set as setShow to "False" bcz nv only filter ni close chylankontunav kabatti
 *    
 *          <button onClick={() => setShow(false)}  </button>
 * 
 *        <button onClick={() => setShow(false)} type="button" data-drawer-dismiss="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close Filters</span>
        </button>
 */