import React from "react";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaShippingFast, FaGifts, FaHeadset } from "react-icons/fa";

const Services = () => {
  const serviceData = [
    {
      icon: <FaRegCreditCard className="text-4xl text-blue-500 mr-4" />,
      title: "Online Payment",
      description: "We are available around the clock to assist you.",
    },
    {
      icon: <FaShippingFast className="text-4xl text-green-500 mr-4" />,
      title: "Free Shipping",
      description: "Enjoy free shipping worldwide on all orders.",
    },
    {
      icon: <FaGifts className="text-4xl text-purple-500 mr-4" />,
      title: "Exclusive Offers",
      description: "Get exciting deals and offers on your favorite products.",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-500 mr-4" />,
      title: "Customer Support",
      description: "Our dedicated support team is here to help you anytime.",
    },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600">
          We provide a range of services to enhance your shopping experience.
        </p>
      </div>

      <div className="container mr-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="max-w-sm mx-4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center 
            hover:shadow-2xl hover:scale-95 transform transition duration-300 ease-in-out"
          >
            <div className="flex mb-4 items-center justify-center">
              <div className="mb-4 space-x-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
            </div>

            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
