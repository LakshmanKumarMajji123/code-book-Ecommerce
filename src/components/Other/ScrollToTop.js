import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export const ScrollToTop = () => {

  const { pathname } = useLocation();
  //I just need to "ScrollToTop" when path changes like products/10001 like that

  useEffect(() => {
    //By using window.scrolltoTop to load the content from top to bottom when path is changes
    window.scrollTo(0, 0); //zero, zero co-ordinates
  }, [pathname]); //whenever "pathname" in depedency is changes then things will work inside of "useEffect"

  return null;

}


