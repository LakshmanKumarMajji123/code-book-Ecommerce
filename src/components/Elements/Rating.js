import { Fragment } from "react";


export const Rating = ({ rating }) => {
  /**
   * rating-4 aythe then loopOver - 4times then remaining 5thOne is emptyOne
   * rating-3 aythe then loopOver - 3times then remaining two is emptyOne
   */
  let ratingArray = Array(5).fill(false); //initially array with 5 positions filled with "false"
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }
  /**
   * nv paina propObj (rating) 3 undi anuko
   * 1. we intially set the array as empty array[0, 0, 0, 0, 0]  Array(5).fill(false);
   * 
   * 2. we loop over based on the "rating" which is come from the "propObj" ({rating}) ex- rating is "3"
   *        for(let i = 0; i < 3; i++) {
   *           ratingArray[i] = true; so three indexes set to "true"
   *        }
   * 
   * 3. And set the ratingArray to "true" basedn on the "rating" which u are get in the prop(obj)
   *   if rating is "3" then 3 index's set to "true" remaining is "false"
   *   if rating is "2" then 2 index's set to "true" remaining is "false"
   *   if rating is "4" then 4 index's set to "true" remaining is "false"
   * 
   * so convert the "ratingArray" into "true or false" thing
   */
  return (
    <Fragment>
      {ratingArray.map((value, index) => ( //this array currently holds jst "information" not an "obj" or nothing we access "value" directly
        //if value is "true" print fullStar else "false"
        value ? (<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>) : (<i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>)
      ))}
    </Fragment>
  )
}

/**
 *   <Fragment></Fragment> or <> </> or <div> </div> we put any thing. nothing can happens
 */
