import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import gadgets from "../../assets/earphone.png";
import clothing from "../../assets/clothing.png";
import shoes from "../../assets/shoes.png";
import furniture from "../../assets/furnitures.png";

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const carouselData = [
    {
      id: 1,
      image: gadgets,
      title: "Cutting-Edge Gadgets",
      description:
        "Explore a wide range of state-of-the-art gadgets designed to make your life smarter and more convenient. From wireless earbuds to advanced smart home devices, we've got everything to keep you at the forefront of technology.",
    },
    {
      id: 2,
      image: shoes,
      title: "Top-Quality Outdoor Gear",
      description:
        "Prepare for your next adventure with our premium outdoor gear. Featuring durable hiking boots, all-weather jackets, and accessories that ensure you stay safe and comfortable, wherever the trail takes you.",
    },
    {
      id: 3,
      image: clothing,
      title: "Stylish Apparel",
      description:
        "Upgrade your wardrobe with our trendy and comfortable clothing collection. From casual wear to elegant outfits, discover pieces that match your style and elevate your everyday look.",
    },
    {
      id: 4,
      image: furniture,
      title: "Stylish Home Furniture",
      description:
        "Transform your living space with our elegant and functional furniture collection. Whether you need a cozy sofa, a sturdy dining table, or a modern bookshelf, we have something to suit every taste and style.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index
  };

  return (
    <div className="bg-gray-100">
      <Slider {...settings}>
        {carouselData.map((slide, index) => (
          <div key={slide.id} className="mx-auto">
            <div className="shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row justify-center items-center bg-gray-100 mx-auto">
              {/* Image Section */}
              <motion.div
                className="w-1/3 md:w-1/3 relative group"
                key={currentSlide === index ? `image-${index}` : `image-dummy`}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto object-contain transform transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="w-full ml-8 md:w-1/2 p-6 text-center md:text-left"
                key={currentSlide === index ? `text-${index}` : `text-dummy`}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-lg">{slide.description}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
