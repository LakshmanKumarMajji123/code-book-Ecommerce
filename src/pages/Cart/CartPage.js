import { CartEmpty } from "./Cart-components/CartEmpty";
import { CartList } from "./Cart-components/CartList";


export const CartPage = () => {

  const cartlistLength = 0; //we assign cartlist = 1 then it shows products

  return (
    <main>
      {/**if cartListlength is !==0 (notequals to ante products unnatey kdha) then show 'cartlist' else show 'cartempty' */}
      {cartlistLength !== 0 ? <CartList /> : <CartEmpty />}
    </main>
  )
}


