import React from "react";

//Ties everything into the wrapper with the general 'childeren' hook
function Wrapper ({ children }){
    return (
        <div className="wrapper">
            { children }
        </div>
    );
}
export default Wrapper;