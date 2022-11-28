import { useEffect, useState } from "react";
import CartItem from "../../Components/Cart/CartItem/CartItem";
import Header from "../../Components/Shared/Header/Header";



function Cart(){
    const [cartItems, setCartItem] = useState([]);

   useEffect(() => {
       fetch("product.json")
       .then(res => res.json())
       .then(res => setCartItem(res))
   })

    return(
        <div>
        <Header/>
        <div>
            {
            cartItems.map((item,index) => (
                <CartItem key={index} item={item} index={index}/>
            ))
            }
        </div>
        </div>
    );
}

export default Cart;