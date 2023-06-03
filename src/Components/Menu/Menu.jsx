import React from 'react';
import "./menu.css"

export default function Menu() {
  return (
    <div className="menu">
      <h2 className="menu-title">Indian Menu</h2>
      <div className="menu-items">
        {indianMenuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3 className="item-title">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">{item.price}</p>
          </div>
        ))}
      </div>
      <h2 className="menu-title">Special Continental Menu</h2>
      <div className="menu-items">
        {contMenuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3 className="item-title">{item.name}</h3>
            <p className="item-price">{item.cuisine}</p>
            <p className="item-description">{item.description}</p>
            <p className="item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const indianMenuItems = [
  {
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich and creamy tomato-based sauce.',
    price: '$14.99'
  },
  {
    name: 'Biryani',
    description: 'Fragrant rice dish cooked with aromatic spices, meat, and/or vegetables.',
    price: '$12.99'
  },
  {
    name: 'Palak Paneer',
    description: 'Creamy spinach curry with cubes of cottage cheese.',
    price: '$10.99'
  },
  {
    name: 'Masala Dosa',
    description: 'Thin rice and lentil crepe filled with a spiced potato filling.',
    price: '$8.99'
  },
  {
    name: 'Chole Bhature',
    description: 'Chickpea curry served with deep-fried bread.',
    price: '$9.99'
  },
  {
    name: 'Tandoori Chicken',
    description: 'Marinated chicken cooked in a clay oven, known as a tandoor.',
    price: '$13.99'
  },
  // Add more dishes as needed
];

const contMenuItems = [
  {
    cuisine: 'French',
    name: 'Escargots de Bourgogne',
    description: 'Snails cooked with garlic and parsley butter',
    price: '$12.99'
  },
  {
    cuisine: 'French',
    name: 'Coq au Vin',
    description: 'Chicken braised in red wine with mushrooms and onions',
    price: '$16.99'
  },
  {
    cuisine: 'French',
    name: 'Bouillabaisse',
    description: 'Traditional Provençal fish stew with saffron and garlic',
    price: '$18.99'
  },
  {
    cuisine: 'Italian',
    name: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze',
    price: '$9.99'
  },
  {
    cuisine: 'Italian',
    name: 'Margherita Pizza',
    description: 'Classic pizza topped with tomatoes, mozzarella, and basil',
    price: '$12.99'
  },
  {
    cuisine: 'Italian',
    name: 'Spaghetti Carbonara',
    description: 'Pasta dish with eggs, pancetta, cheese, and black pepper',
    price: '$14.99'
  },
  {
    cuisine: 'Indian',
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich and creamy tomato-based sauce',
    price: '$14.99'
  },
  {
    cuisine: 'Indian',
    name: 'Palak Paneer',
    description: 'Spinach and cottage cheese curry',
    price: '$12.99'
  },
  {
    cuisine: 'Indian',
    name: 'Chicken Biryani',
    description: 'Fragrant rice dish with spiced chicken and aromatic spices',
    price: '$16.99'
  }
];

