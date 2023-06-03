import React from 'react';
import footericon from '../../Assets/fs.png';
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <img src={footericon} alt="footer logo"/>
        <p className="footer-text">
        &copy; 2023 Little Lemon Restaurant. All rights reserved.
      </p>
    </div>
    
  )
}
