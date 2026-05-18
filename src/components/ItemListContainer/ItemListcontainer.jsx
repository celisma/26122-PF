import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.log(err))
    .finally(() => {
      setLoading(false);
    });
  }, []);
// console.log() //para ver product

  if(loading) return <p>Cargando...</p>

  return(
  <section>
    <ItemList products = {products}/>
  </section>);

};