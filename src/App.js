import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Routes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Routes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Routes/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import About from "./Routes/About/About";
import Faq from "./Routes/Faq/Faq";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/:categoryId' element={ <ItemListContainer/>}/>
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path='/checkout' element={<Checkout/>}/> */}
          <Route path="/about" element={<About/>}/>
          <Route path="/faqs" element={<Faq/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
