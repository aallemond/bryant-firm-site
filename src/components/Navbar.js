import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <>
         <nav className="bg-red-950 text-white border-b-4 border-amber-400  mx-auto ">
            <div className="container mx-5 flex justify-between">
               <ul className="flex space-x-8">
                <li>
                    <Link to="/" className="font-cinzel text-lg hover:underline">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="Team" className="font-cinzel text-lg hover:underline">
                        Meet The Team
                    </Link>
                </li>

                <li>
                    <Link to="Contact" className="font-cinzel text-lg hover:underline">
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