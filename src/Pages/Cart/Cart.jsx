import { useEffect, useState } from "react";
import CartItem from "../../Components/Cart/CartItem/CartItem";
import Header from "../../Components/Shared/Header/Header";
import "./Cart.css";


function Cart(){
    const [cartItems, setCartItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
   useEffect(() => {
       fetch("product.json")
       .then(res => res.json())
       .then(res =>{
        updateTotalPrice(res)
        setCartItem(res);
       } )
   },[]);

   //Step 3 : take new quantity and update cart items.
   function updatePrice(item, newQuantity){
    let items = cartItems;
    let cartItemIndex = items.findIndex((i)=>i.name===item.name);
    items[cartItemIndex].qty = newQuantity;
    setCartItem(items);
    updateTotalPrice(items);
   }

   //1:UpdateTotalPrice =  sum of price*quantity for each cart items .
   function updateTotalPrice(res){
    let sum = 0;
    for(let i=0;i<res.length;i++){
        sum = sum+Number(res[i].price)*Number(res[i].qty);
    }
    setTotalPrice(sum);
   } 

    return(
        <div className="cart-container">
        <Header/>
        {/* 2.print update total price */}
        <h4 className="totalPrice">Total Price: {totalPrice}</h4>
        <div>
            {
            cartItems.map((item,index) => (
                <CartItem updatePrice={updatePrice} 
                key={index} 
                item={item} 
                index={index}/>
            ))
            }
        </div>
        </div>
    );
}

export default Cart;