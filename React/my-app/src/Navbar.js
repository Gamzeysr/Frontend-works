import React from 'react'
import propTypes from "prop-types";

function Navbar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
export default Navbar;