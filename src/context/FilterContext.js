//creating a intial state is an obj which store multiple stuff.
import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers";


/* 1. Define initialState  */
const filterInitialState = {
  /* Instead of using "useState" const [products, setProducts] = useState([]); 
     we use context & reducers to replace of useState() "productList: []" */
  productList: [],
  onlyInStock: false,        //we initially take 4 properties set to default
  bestSellerOnly: false,
  sortBy: null,
  ratings: null
  //task of "dispatch" is updating the above 4 properties (onlyInStock, bestSellerOnly, sortBy, ratings)
  //Reducer can only update the "state" only
}


/* 2. Create CartContext using createContext with initialState */
const FilterContext = createContext(filterInitialState);


/*3. Create CartProvider accessing the children */
export const FilterProvider = ({ children }) => {
  /*filterProvider access the information which is "Children".
   children ni enduku access chestham ante we are going to cover entire app with this "provider"
   FilterProvider returns "FilterContext" with these values  
  */

  /**4. Access state and dispatch using useReducer with FilterReducer and initialState */
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState);
  /**
   * 1. useReducer(FilterReducer, filterInitialState); which returns "state & dispatch"-> const [state, dispatch]
   * 2. state :- having informatio about "filterInitialState"  cosnt filterInitialState = {}
   * 3. dispatch:- is a method which updating the "initialState"
   *   whenever u call the dispatch it going to call the "FilterReducer" and those stuff will work on...
   */

  //define functions and access and mention below functions inside of "value" and get access to the productList.like that...anywhere we want to use
  
  /** 5. Define function for each possible operation */
  function initialProductList(products) { //this "products" parameter is come from the function invoke argument ( initialProductList(data); )
    //this func going to update the "productList: []". 
    //after simply call the "dispatch" and update the state
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products //this products which is come from param "initialProductList(products)" in this param information came form API
      }
    });
  }

  //func for "best_seller = true"
  function bestSeller(products) { //this param "produts" data came from the API
    //if bestSellerOnly is "true" then "update the produts by filtering it" or else return normal "produts" which is comes from the APi
    return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products; //select individual "product"
  }

  //func for "in_stock = true"
  function inStock(products) {
    //if onlyInStock is "true" then "update the produts by filtering it" or else return normal "produts" which is comes from the APi
    return state.onlyInStock ? products.filter(product => product.in_stock === true) : products; //select individual "product"
  }

  //func for sort products
  function sort(products) {
    //check 2 conditions "low to high" & "high to low"
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return products;  //if "lowtohigh" updating "hightolow" updating or else return 'produts' which came from 'API'
  }

  //func for rating 
  function rating(products) {
    if (state.ratings === "4STARABOVE") {
      return products.filter(product => product.rating >= 4); //select individual "product" product.rating is >= 4 then filter that product
    }
    if (state.ratings === "3STARABOVE") {
      return products.filter(product => product.rating >= 3); //select individual "product" product.rating is >= 3 then filter that product
    }
    if (state.ratings === "2STARABOVE") {
      return products.filter(product => product.rating >= 2); //select individual "product" product.rating is >= 2 then filter that product
    }
    if (state.ratings === "1STARABOVE") {
      return products.filter(product => product.rating >= 1); //select individual "product" product.rating is >= 1 then filter that product
    }
    return products;//above we can't apply any thing then we just return "products" //if >=4 updating if >=3 updating  if >=2 updating if >=1 updating
  }

  //applying all filters to get the final productList. by creating func called "filteredProdutList"
  /**(apply multiple conditions at once...) */
  const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));
  /**Initial ga "state.productList" state lo productList lo unna 15products display avuthai 
   * after nv apply chesina filter batti products display avuthai
   * ex:- bestSeller apply chesthe bestSeller func lo true avi return filtered produts. remaining(instock, sort, rating) all are default return bcz those are in "false"
   *  
   * 1. nv a filter aythe apply chesthe apdu again call this "filteredProductList" (initial ga "initialProductList" dwara API lo details fetch avuthai)
   * 2. Inside "value" lopala "products: filteredProductList" ki reach ayyi useFilter()dwara
   * 3. productList page lo const {products, initialProductList} = useFilter() so products ni
   * 4. card lo insert chestham. Those all thing happens when. u apply a filter. filter apply chesinapdu
  */
  const value = {
    state,
    dispatch,
    /** productList: [], e produtList const initialState{} lo undhi kabati
     * manam kinda productList ani normal name teeskoni : state.(state loundi kabati state ni access chesi)productList(productList ni pedtunam)
     */
    //productList: state.productList,
    //products: state.productList, //we change the name "productList" to "products"
    products: filteredProductList, //bcz ( rating(sort(inStock(bestSeller(state.productList)))); ) ikkdade state.productList access chesesam kabatti
    initialProductList
  }


  /*4. Return the CartContext.Provider with children and prop value Values that you want to access inside the entire application */
  return (
    <FilterContext.Provider value={value}>
      {children} {/**children which is going to be my app */}
    </FilterContext.Provider>
  )
}

/*5. create a func "useFilter" that access all the components information  */
/**useFilter func it will be utilize with every component */

//export const useFilter = () => useContext(FilterContext);
//or
export const useFilter = () => {
  const context = useContext(FilterContext);
  /*paina "FilterContext" lo vachina value ikkad capture chesi variable "context" lo store chesi return chestunam 
  and e func ni whereever we want we call in that.. it willbe utilize by everyone */
  return context;
}

/**prathi page lo "useContext(FilterContext)" usecontext ni (filterContext) ni import cheskovatam kante 
 * simple ga useFilter () ane o arrow function lo context ane variable lo store chesukoni useContext vaadi "FilterContext" ni
 * import cheskoni return chestunaam 
 * so ippdu this "useFilter()" func ni manaki yeakkda kavalsi vasthe akkda call cheskontam
*/






/**
 * 1. create context
 * 2. create our own provider
 * 3. create our useFilter
 */