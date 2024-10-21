import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const features = [
  {
    title: "Booking Rake",
    description: "Effortlessly book rakes for efficient transportation and logistics",
    imageSrc: "/card1.png", // Replace with the path to your image
    link: "/booking" // Specify the route you want to navigate to
  },
  {
    title: "Forecasting",
    description: "Forecasting the coal production",
    imageSrc: "/card2.jpeg", // Replace with the path to your image
    link: "/forecasting" // Specify the route you want to navigate to
  },
  {
    title: "Scheduling",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSrc: "/card3.png", // Replace with the path to your image
    link: "/scheduling" // Specify the route you want to navigate to
  }
];

const SelectionMenu = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link} // Navigate to the specified route
            className="p-6 border rounded-lg shadow-lg flex flex-col items-center text-center bg-white hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            <img src={feature.imageSrc} alt={feature.title} className="w-150 h-50 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectionMenu;
