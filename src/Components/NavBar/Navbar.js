import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "./Cart/CartWidget";
import { GrSearch } from "react-icons/gr";
import { VscAdd } from "react-icons/vsc";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  let [openDropdown, setOpenDropdown] = useState(false)

  return (
    <div className="navbar">
      <ul className={`nav_items ${isOpen && "open"}`}>
        <li className="dropdown">
          <Link to="/products" className="hover-underline-animation">SHOP{" "}
            <button className={openDropdown ? "close-dropdown" : "open-dropdown"} onClick={()=>setOpenDropdown(!openDropdown)}>
              <VscAdd/>
            </button>
          </Link>
          <div className={openDropdown ? "dropdown-content" : "dropdown-closed"}>
            <ul>
                <li><a href="#" className="hover-underline-animation">CAT FEEDING</a></li>
                <li><a href="#" className="hover-underline-animation">CAT ACCESORIES</a></li>
                <li><a href="#" className="hover-underline-animation">CAT HYGIENE PRODUCTS</a></li>
                <li><a href="#" className="hover-underline-animation">CAT TOYS</a></li>
            </ul>
          </div>
        </li>
        <li><a href="#" className="hover-underline-animation"> ABOUT</a></li>
        <li><a href="#" className="hover-underline-animation"> FAQ</a></li>
      </ul>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav_logo"> Cattitude </div>
      <div className="nav_icons">
        <div className="searcher">
          <input type="search" placeholder="SEARCH"/>
          <button>
            <GrSearch />
          </button>
        </div >
        <CartWidget />
      </div>
    </div>
  );
};
export default Navbar;
