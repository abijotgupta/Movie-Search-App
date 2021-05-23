import React from "react";

class NavBar extends React.Component {
  render () {
    return (
        <div className="nav">
            <div className="searchBar">
                <input />
                <button id="search-btn">Search</button>
            </div>
        </div>
      );
  }
}

export default NavBar;