import React from "react";
import Slider from "react-slick";

const CrashCourse: React.FC = () => {
  const featureItems = [
    {
      title: "ISAI Studio",
      description:
        "Quickly connect your Ethereum wallet using MetaMask and start using our platform in seconds.",
      icon: "🤖", // Example icon, you can replace with any relevant icon or image
    },
    {
    title: "Wallet & Gas Quick Start",
    description:
        "Pay for network transaction fees with gas tokens, ensuring smooth blockchain operations.",
    icon: "⛽", // Example icon
    },
    {
      title: "Earn with No Code AI",
      description:
        "Purchase Gen Credits with crypto or card to access premium features and services.",
      icon: "💡", // Example icon
    },
    {
      title: "Level Up with Plugins",
      description:
        "Sell, buy, and trade NFTs directly through the marketplace with seamless integration.",
      icon: "🎮", // Example icon
    },
    {
      title: "Manage you Agent NFT",
      description:
        "Make payments using popular cryptocurrencies, ensuring security and ease of use.",
      icon: "⚙️", // Example icon
    },
    {
      title: "View Balances & Earnings",
      description:
        "Track your credits, purchases, and activity all in one place with an intuitive user interface.",
      icon: "💸", // Example icon
    },
    {
      title: "Buy Advanced Agent Shares",
      description:
        "Pay for network transaction fees with gas tokens, ensuring smooth blockchain operations.",
      icon: "🌱", // Example icon
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-lg mx-auto py-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-accent2 text-center mb-8">Crash Course</h1>

      <Slider {...settings}>
        {featureItems.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-accent1 text-center hover:bg-[#fd01f5] hover:text-black transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CrashCourse;