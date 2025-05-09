/**
 * 1. creat a hook and pass information about 'title'. it will be updated
 * 2. I will call it on my every single page
 */

import { useEffect } from "react";

export const useTitle = (title) => { //by this 'parameter (title)' to pass information

  /**everytime i update anything i'm going to  call this useEffect */
  useEffect(() => {

    document.title = `${title} - CodeBook`;
  }, [title]); //evrytime i update the "title" i call this useEffect. Inside things will work

  return null; //it doesn't return anything
}

/**
 * On eachpage i call the useTitle and pass the title to the parameter (title)
 */
