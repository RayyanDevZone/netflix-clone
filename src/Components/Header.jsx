import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import {ImSearch} from 'react-icons/im'

const Header = () => {
  return (
    <nav className="nav">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
        <div className="firstblock">
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <ImSearch/> 
      <div>

      </div>
    </nav>
  );
};

export default Header;
