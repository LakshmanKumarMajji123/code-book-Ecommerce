import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";

export const Header = () => {

  /*-------------------------------------Search functionality------------------------------------------------------------------ */
  //creating a state for search
  const [searchSection, setSearchSection] = useState(false); //intially we set the state to "false".

  /**---------------------------------darkMode functionality------------------------------------------------------------ */
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  /**---------------------------------dropdown--------------------------------------- */
  const [dropdown, setDropdown] = useState(false);

  //if i have 'accessToken' then show the 'dropdown' otherwise no.
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    //In 1st load we set the darkMode in "localStorage"
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    //we are going to change the 'html root' . remember class of html root
    if (darkMode) { //if 'darkMode' is true then add the class or else remove the class
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [darkMode]); //whenever u change the 'darkmode' then something will happen iniside of "useEffect"


  // import { useEffect, useState } from "react";
  // import { Link } from "react-router-dom";
  // import Logo from "../../assets/logo.png";

  // export const Header = () => {
  //   const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  //   useEffect(() => {
  //     localStorage.setItem("darkMode", JSON.stringify(darkMode));

  //     if(darkMode){
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
              </span>
            </Link>
            <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
            {/**conditon is dropdown is visible. {dropdown && <Dropdown>}
              if dropdown is visible then show which dropdown
              this is based on 'token'   {dropdown && (token ? <DropdownLoggedIn /> : <DropdownLoggedOut />)}
              if token is there then show "loggedin" dropdown
              or else 'loggedout' dropdown */}
            {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
          </div>
        </div>
      </nav>

      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  )
}


/**
 * ---------Search button hidden functinality in header---------
 * 1. Initially we set the state to "false"
 *      const [searchSection, setSearchSection] = useState(false);
 * 
 * 2. when u click the search button by Onclick function it set the state to "true"
 *    <span onClick={() => setSearchSection(!searchSection)> </span>
 * 
 * 3. Then "searchSection" state is true then visible
 *   {searchSection && <Search />}
 * 
 * 4. passing prop as "setSearchSection = {setSearchSection} and access in the Search.js {setSearchSection}
 * "
 */


/**     -------------DarkMode-------
 * initial ga darkmode false state lo untadhi bcz manam first load lone em store chyam kdha akda unna flase value
 * ni true ga setDarkMode lo set chesi aa "darkMode" ni useEffect dependency dwara lopala content ni work chyistham
 * inside of useEffect that time we set the localStorage to dark/
 * thenafter second load we get the darkMode from localStorage and work on it...
 * useState(JSON.parse(localStorage.getItem("darkMode")) || false);
 * 
 * 1. we click on the darkMode span tag it changes 'true' '!false' means true so setDarkMode is "true"
 * 2. so "darkMode" is true
 * 3. whenever darkMode is change inside useEffect things are work so In dependency "darkMode" is true
 * 4. so , inside of useEffect we have some if else condition. darkMode is 'true' so if condition excutes 
 */