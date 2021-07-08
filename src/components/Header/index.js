import React from "react";
import "./Header.css"

function Header () {
    return (
        <div className="header bg-secondary">
            <h1>Employee Directory</h1>
            <p>Click on Name heading to re-order alphabetically or use the search box to narrow your results</p>
        </div>
    )
}

export default Header;