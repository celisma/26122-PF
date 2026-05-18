import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({products}) => {
  // console.log("Products en ItemList",products), para testear si llega bien la props

  if (!products.length){
    return <p>No hay products</p>
  }

  return (
    <div className="products-container">
      {
        products.map((products) => (
          <Link to={`/product/${products.id}`} key={product.id}>
            <Item {...product}/>
          </Link>
        ))
      }
    </div>
  )
};