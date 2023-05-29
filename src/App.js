import "./App.css";

//for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PgFOF from "./Components/PgFOF";
import UserProfile from "./Components/UserProfile";
import Addproduct from "./Components/Addproduct";
import Allproductpage from "./Components/Some-Product-Components/Allproductpage";

import Specificproductpage from "./Components/Some-Product-Components/Specificproductpage";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/sellproduct" element={<Addproduct />} />
        <Route
          exact
          path="/product-type/Utensils"
          element={<Allproductpage type={"Utensils"} />}
        />
        <Route
          exact
          path="/product-type/Clothes"
          element={<Allproductpage type={"Clothes"} />}
        />
        <Route
          exact
          path="/product-type/Toys"
          element={<Allproductpage type={"Toys"} />}
        />
        <Route
          exact
          path="/product-type/Accessories"
          element={<Allproductpage type={"Accessories"} />}
        />
        <Route
          exact
          path="/product/:type/:id"
          element={<Specificproductpage />}
        />
        <Route exact path="/cartdata" element={<Cart />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="*" element={<PgFOF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
