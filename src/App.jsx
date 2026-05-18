import { Route, Routes } from "react-router-dom";
import './App.css'
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element = {<ItemListContainer />}/>
          <Route path="/product/:id" element = {<ItemDetailContainer />}/>
          <Route path="/carrito" element= {<p> Carrito</p>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
