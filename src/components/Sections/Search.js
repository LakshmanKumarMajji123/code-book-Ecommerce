import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({setSearchSection}) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    console.log("value is..", searchRef.current.value);
    navigate(`/products?q=${searchRef.current.value}`);
  }

  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative w-full">
          <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
          <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" autoComplete="off" required="" />
        </div>
        <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        </button>
      </form>
    </div>
  )
}






// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export const Search = ({ setSearchSection }) => {
//   const navigate = useNavigate();
//   const searchRef = useRef();

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setSearchSection(false);
//     navigate(`/products?q=${searchRef.current.value}`);
//   }



//   // export const Search = ({ setSearchSection }) => {

//   //   const navigate = useNavigate();
//   //   const searchRef = useRef();
//   //   //creating a handlesSearch function (we use anytype of func like regFunc or arrowFuc it's depend on u)
//   //   const handleSearch = (event) => {
//   //     event.preventDefault();

//   //     setSearchSection(false); //we hide the searchbar
//   //     //call the "navigate()" here
//   //     navigate(`/products?q=${searchRef.current.value}`);//?q= "term" i need to define which is from u r input(which u are given)
//   //   }

//   return (
//     <div className="mx-auto max-w-screen-xl p-2 my-5">
//       <form onSubmit={handleSearch} className="flex items-center">
//         <div className="relative w-full">
//           <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
//           <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" autoComplete="off" required="" />
//         </div>
//         <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         </button>
//       </form>
//     </div>
//   )
// }

/**
 * 1. when u submit the form by using "onSubmit" <form onSubmit = {handleSearch} > </form> it triggers the "handelSearch" arrow function
 *    and inside things will  work.
 * 
 * 2.  Intialze useNavigate() to navigate. const navigate = useNavigate(); and call the navigate inside of "handleSearch() func"
 * 
 * 3. navigate(`/products?q=`) the q value which u are given from the input field which u are given..
 * 
 * 4. Give reference in the input field----> ref={searchRef} in the <input  ref={searchRef} />
 * 
 * 5. By using useReference(useRef()) and intialize to thie searchRef. so u access ur input field value  anytime by "useRef"
 * 
 * 6. products are displayed. and also we hide the search bar 
 */