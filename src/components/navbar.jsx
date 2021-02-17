import React, { useState, useRef, useEffect} from 'react';
import { NavbarBrand } from 'shards-react';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);

  const linksRef = useRef(null);
    
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

    return ( 
    <div className="main-navbar">
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
        <NavbarBrand href="/"><h3 className="logo">Github Issue Tracker</h3></NavbarBrand>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
     );
}
 
export default NavBar;