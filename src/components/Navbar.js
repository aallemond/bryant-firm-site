import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <>
         <nav className="bg-red-800 text-white border-y-2 border-black">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:text-gray-300">
                      Home
                     </Link>
                </li>
                 <li>
                    <Link to="/senators" className="hover:text-gray-300">
                    About Us
                     </Link>
                 </li>
                 <li>
                     <Link to="/bills" className="hover:text-gray-300">
                      Contact Us
                     </Link>
                 </li>
            </ul>
          </div>       
          </nav>
        </>
    );
}

export default Navbar;