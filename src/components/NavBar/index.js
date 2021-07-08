import React from 'react';
import Search from "../Search";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

       <div className="search-area col-4">
        <Search />
    </div>
</nav>
    );
}
export default NavBar;