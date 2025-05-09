/**
  /**state :- which holds the "currentValue"
 * action:- The information we are passing
 * 
 *     dispatch({  
            type: "ADD_TO_CART", 
            payload: {  
          products: updatedCartList
         }
        })
 */

/**Task of "reducer" is return "updatedState" */


export const FilterReducer = (state, action) => {

  //destructing
  const { type, payload } = action;

  switch (type) {

    case "PRODUCT_LIST":
      return { productList: payload.products } //state ni access chesi "productList" return the updated state "productList"

    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy }  //previous state info(...state, ) and update new state info

    case "RATINGS":
      return { ...state, ratings: payload.ratings }

    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly }

    case "ONLY_IN_STOCK":
      return { ...state, onlyInStock: payload.onlyInStock }

    case "CLEAR_FILTER":
      return {
        ...state, //previous productList as it is.. after each property we reset it to default..
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null
        //simply we set the state to "default"
      }

    default:
      throw new Error("No Case Found");
  }

}

/**
 * first Ratings filter apply chesav 
 * after BestSeller apply  so {...state,bestSellerOnly: payload.bestSellerOnly }
 * ...state (previousState lo ratings info store avi untadhi) 
 * bestSellerOnly: payload.bestSellerOnly (prsesnt lo bestSellerOnly: lo bestSeller filtered info untadhi)
 * 
 * 3rd time inStock filter apply chesav anuko
 * ...state (previousState lo ratings info, bestSellerOnly info store avi untadhi)
 * onlyInStock: payload.onlyInStock (instock: filtered info update avvudhi)
 */