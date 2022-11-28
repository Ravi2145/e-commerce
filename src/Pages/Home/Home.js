
import { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard'
// import Footer from '../../Components/Shared/Footer/Footer';
import Header from '../../Components/Shared/Header/Header'

function Home() {
  //  Create a state for products data.
  // whenever there is a change in products, it will force component refresh.
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(0);
  // const [click2, setClick2] = useState(100);
    // let data = "My data"
useEffect(()=>{
  // fetch is used to call the API for any services.
  // calling json funtion.
  fetch("https://fakestoreapi.com/products")

      .then(res=>res.json())
      // Listening for json to return.
      .then((res)=>{
        
        // console.log(products.length);
        console.log("fetching data")
        res.forEach(o=>{
          o.rating.rate=Math.ceil(Number(o.rating.rate))
        });
        console.log(res)
        setProducts(res);
      });
      
},[click]);
  
  return (
    <div>
     <Header/>
     {/* Products */}
     {/* <div>
      <h1>{click}</h1>
      <h1>{click2}</h1>
      <button onClick={()=>{
        setClick(click+1);
      }
      }>Click</button>
      <button onClick={()=>{
        setClick2(click2+1);
      }
      }>click2</button>
     </div> */}
    {/* <div>
      <h3>{products && products.length}</h3>
      <h1>{data}</h1> */}
      <div className='row'>
        {products.map((product)=>(
          <div className='col-3'>
              <ProductCard item={product} index={1}/>
              </div>
        ))}
      {/* </div> */}
      
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default Home