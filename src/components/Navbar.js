import "./NavbarStyles.css";
import { Link } from "react-router-dom";

import React from 'react';

const Navbar = () => {
  return (
    <div>
      <ul className="nav-menu">
        <li><Link to="/"><div className="uber">Home</div></Link>
        </li>
        <li><Link to="/About"><div className="uber">LinkedIn</div></Link>
        </li>
        <li><Link to="/Project"> <div className="uber">Instagram</div></Link>
        </li>
      </ul>
     </div>
  )
}

export default Navbar
