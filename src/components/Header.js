import React, {useState} from "react";

const Header = ({filterPosts, setIsFiltering, filteredPosts}) => {
    const [val, setVal] = useState("");

    const handleSearch = (e) => {
        setIsFiltering(true);
        setVal(e.target.value);
        filterPosts(e.target.value);

        if (e.target.value === "") {
            setIsFiltering(false);
        }
    }

    return (
        <div className="header__container">
            <div className="header__logo">logo</div>
            <div className="header__input-container">
                <input type="text" 
                placeholder="Search" 
                value={val} 
                onChange={(e) => handleSearch(e)}
                />
                </div>
            <div className="header__profile-pic">profile pic</div>
        </div>
    )
}

export default Header;