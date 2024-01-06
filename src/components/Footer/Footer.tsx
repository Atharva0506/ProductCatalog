import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
function footer() {
  return (
  <footer className="fade-in">
    <a href="#" className='footer_logo'>Product Catalog</a>
    <ul className='permalinks'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/#Products">Products</Link></li>
      <li><Link to="/cart">Cart</Link></li>
    </ul>

    <div className='footer_socials'>
    <a href="https://github.com/Atharva0506/ProductCatalog" target="_blank" ><FaGithub/></a>
    </div>
    <div className="footer_copyright">
      <small>
        &copy;All Right Reserved;
      </small>
    </div>
     </footer>
    )
}

export default footer