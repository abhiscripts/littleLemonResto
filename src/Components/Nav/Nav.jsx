import React from "react";
import {  Link } from "react-router-dom";
import headerImage from "../../Assets/Asset 14@4x.png";
import "./nav.css";

const Links = [
  { to: "/", value: "Home" },
  { to: "/Menu", value: "Menu" },
  { to: "/Book", value: "Book" },
  { to: "/About", value: "About" },
];
export default function Nav() {
  const renderLinks = (Links) => {
    return Links.map((link) => {
      return (
        <Link to={link["to"]} className="navlink">
          {link["value"]}
        </Link>
      );
    });
  };
  return (
    <div className="navMain">
      <img src={headerImage} alt="WebPageImage" />
      <div className="navigation">
        <nav>{renderLinks(Links)}</nav>
      </div>
    </div>
  );
}
