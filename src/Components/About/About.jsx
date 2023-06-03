import React from "react";
import "./About.css"; // Import the corresponding CSS file

const About = () => {
  const restaurantInfo = `Little Lemon Restaurant is a cozy and vibrant dining establishment located in the heart of the city. We pride ourselves on offering a unique and delightful culinary experience to all our guests.

  Our restaurant specializes in serving a fusion of flavors from around the world, combining traditional recipes with modern twists. Each dish on our menu is carefully crafted by our talented team of chefs, who are passionate about creating culinary masterpieces that tantalize your taste buds.

  At Little Lemon, we believe in using only the freshest and highest quality ingredients. We source our produce from local farmers and suppliers, ensuring that every bite you take is bursting with flavors and nutrients.

  Our menu offers a wide variety of options to cater to different preferences and dietary needs. Whether you're a meat lover, vegetarian, or vegan, we have something delicious for you. From succulent steaks and seafood to mouthwatering pastas and salads, there's a dish to satisfy every craving.

  The ambiance at Little Lemon is warm, inviting, and perfect for any occasion. Whether you're joining us for a romantic dinner, a family celebration, or a business meeting, our friendly staff will ensure that your experience is nothing short of exceptional.

  We also offer an extensive selection of wines, handpicked to complement our dishes and enhance your dining experience. Our knowledgeable sommeliers are always available to assist you in choosing the perfect pairing.

  In addition to our regular dining services, we also provide catering for special events and private parties. Our dedicated events team will work closely with you to create a customized menu and ambiance that suits your needs and preferences.

  Come and experience the culinary delights of Little Lemon Restaurant. We look forward to serving you and making your dining experience truly memorable.`;

  return (
    <div className="about-container">
      <h2>Opening Hours:</h2>
      <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
      <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
      <h2>About Little Lemon Restaurant</h2>
      <p>{restaurantInfo}</p>
    </div>
  );
};

export default About;
