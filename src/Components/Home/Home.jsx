import React from 'react';
import { useNavigate } from "react-router-dom";
import pasta from "../../Assets/pasta.webp";
import newmenu from "../../Assets/newMenu.webp";
import reserve from "../../Assets/reserve.jpeg";
import opn from "../../Assets/opn.avif"
import "./home.css"

export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="intro">
    <img src={pasta} alt="Intro" />
    <div className="overlay">
      <h2>Experience the Finest Quality and Fresh Foods</h2>
      <p>
        At Little Lemon restaurant, we pride ourselves on serving the
        finest quality and fresh foods. Our experienced chefs prepare
        every dish with utmost care, ensuring a delightful dining
        experience for our customers.
      </p>
      <p>
        Don't miss our exclusive weekend offer! Get a fantastic
        <span className="offer"> 30% discount</span> on selected menu items
        every Saturday and Sunday. It's the perfect opportunity to indulge
        in our mouthwatering dishes while enjoying great savings.
      </p>
    </div>
    <div className="card-container">
        <button className="card" onClick={() => navigate("/Menu")}>
            <h2>Our new Menu</h2>
            <img src={newmenu} alt="Our Menu" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla
              fringilla ligula quis quam rutrum, ac condimentum.
            </p>
          </button>
          <button className="card" onClick={() => navigate("/Book")}>
            <h2>Book A table</h2>
            <img src={reserve} alt="Book Table" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla
              fringilla ligula quis quam rutrum, ac condimentum.
            </p>
          </button>
          <button className="card" onClick={() => navigate("/About")}>
            <h2>Opening Hours</h2>
            <img src={opn} alt="Our Hours" />
            <p>Sed sed metus id nisl varius fermentum sed in nisi.</p>
          </button>
        </div>
  </div>
  )
}
