import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myntra from '../assets/myntra_logo.webp';
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import tryon from '../assets/tryon.png'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 200);
  };

  const handleTryOnClick = () => {
    setShowExplore(!showExplore);
  };

  const handleExploreClick = () => {
    navigate('/try-on');
  };

  return (
    <>
      <header>
        <div className="logo_container">
          <a href="#"><img className="myntra_home" src={myntra} alt="Myntra Home" /></a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Beauty</a>
          <a href="#">Studio</a>
          <div
            className="nav_item"
            onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={handleTryOnClick}
          >
            <a href="#" className="try-on-link">Try On<sup className="new_badge">New</sup></a>
            {showExplore && (
              <div className="hover_menu">
                  <span className='tryon_heading'> <img src={myntra} className= 'tryon_logo' alt="" /> TRY-ON</span>
                  <p className='tryon_p'>Let's add fashion and comfort together!</p>
                <img src={tryon} alt="" className='tryon_img'/>
                <div className='btn_container'><button className='tryon_btn' onClick={handleExploreClick}>EXPLORE TRY-ON</button></div>
              </div>
            )}
          </div>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon"></span>
          <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
          <div className="action_container"><IoPersonSharp />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container"><FaHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <a className="action_container" href="pages/bag.html"><GiShoppingBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
