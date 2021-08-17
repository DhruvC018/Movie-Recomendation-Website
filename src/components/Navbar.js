// import { render } from '@testing-library/react';
import React from 'react';
import { data } from '../data';
// import {add}

class Navbar extends React.Component{
    render() {
        return (
            <div className="nav">
                <div className="search-container"> 
                    <input type="text"/>
                    <button id="search-btn">Search</button>
                    {/* </input> */}
                </div>
            </div>
        );
    }

}

export default Navbar;
