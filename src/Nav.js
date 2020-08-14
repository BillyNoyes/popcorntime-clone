import React from "react";
import "./Nav.css";

import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <MovieIcon className="nav__selected" />
        <TvIcon />
      </div>
      <div className="nav__logo">
        <img
          src="https://popcorntime.app/images/popcorn-time.png"
          alt="Popcorn Time Logo"
        />
      </div>
      <div className="nav__right">
        <SearchIcon />
        <FavoriteIcon />
        <LockOpenIcon />
        <SettingsIcon />
        <InfoIcon />
      </div>
      {/* <div className="nav__fadeBottom"></div> */}
    </div>
  );
}

export default Nav;
