import React, { useState } from "react";
import { FaBlogger } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const Header = ({ filterPosts, setIsFiltering, filteredPosts }) => {
  const [val, setVal] = useState("");

  const handleSearch = (e) => {
    setIsFiltering(true);
    setVal(e.target.value);
    filterPosts(e.target.value);

    if (e.target.value === "") {
      setIsFiltering(false);
    }
  };

  const openLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const patikaLink = "https://www.patika.dev/";

  return (
    <div className="header__container">
      <div className="header__logo">
        <FaBlogger className="header__logo-icon" />
        <p>Blog Details</p>
      </div>
      <div className="header__input-container">
        <input
          type="text"
          placeholder="Search"
          value={val}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="header__profile-pic">
        <FaUserTie
          className="header__profile-icon"
          onClick={() => openLink(patikaLink)}
        />
      </div>
    </div>
  );
};

export default Header;
