import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Routes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Routes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/products" element={<ItemListContainer/>}/>
        <Route exact path="/products/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
