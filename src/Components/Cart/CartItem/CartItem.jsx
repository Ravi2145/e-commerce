import { useEffect, useState } from "react";
import './CartItem.css';

function CartItem(prop)
{ 

    let [quantity, setQuantity] = useState(1);
    let [totalPrice, setPrice]=useState(prop.item.price);

    function handleQuantityChange(value){
        if(value>0){
            totalPrice = Number(prop.item.price)*value;
            setQuantity(value);
            setPrice(totalPrice);
        }else{
            totalPrice=0;
            setPrice(totalPrice);
            setQuantity(0);
        }
    }
    
  return(
    <div className="cart-item">
       <div className="container-1">
       <div className="container">
            <img className="cart-img" src={prop.item.image}></img>
       </div>
       <div className="container">
           <h4>{prop.item.name}</h4>
       </div>
       </div>

       <div className="container-2">
       <div className="container">
            <h4>&#8377; {totalPrice}</h4>
       </div>

       <div className="quantity btn-group">
       <button className="btn btn-minus" onClick={() => handleQuantityChange(quantity==1?0:quantity-1)}>-</button>
          <button className="btn btn-primary">{quantity}</button>
          <button className="btn btn-plus" onClick={() => handleQuantityChange(quantity+1)}>+</button>
       </div>
       <button className="btn btn-delete" onClick={handleQuantityChange} ><svg xmlns="http://www.w3.org/2000/svg" 
       width="16" 
       height="16" 
       fill="currentColor" 
       class="bi bi-trash" 
       viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
       </div>
    </div>
  );
}

export default CartItem;