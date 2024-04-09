import React, { useState } from "react";
import Card from "./components/Card";
import { motion } from "framer-motion";

const cardVariants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

const cardTransition = { type: "tween", duration: 0.5 };

const Nasa = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardsData = [
    {
      EventName: "NASA‚ Advanced Composite Solar Sail System,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2024/04/acs3-lookingdown.png?w=300",
      Month: "April",
      Date: "24",
      summary: "",
    },
    {
      EventName: "NASA‚ Boeing Starliner Crew Flight Test,Launch Schedulea",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2023/12/boeings-starliner-crew-ship-approaches-the-space-station-52096388014-o.jpg?w=300",
      Month: "May",
      Date: "6",
      summary: "",
    },
    {
      EventName: "NASA‚ SpaceX Crew-9,Launch Schedule",
      imglink:
        "https://images-assets.nasa.gov/image/NHQ202308230007/NHQ202308230007~large.jpg?w=1920&h=1280&fit=clip&crop=faces%2Cfocalpoint",
      Month: "August",
      Date: "2024",
      summary: "",
    },
    {
      EventName: "NASA‚ Europa Clipper Mission,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2023/11/clipper-thumbnail.jpg?w=300",
      Month: "October",
      Date: "2024",
      summary: "",
    },
    {
      EventName: "NASA‚ ASTHROS Mission,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2023/09/asthros.jpeg?w=300",
      Month: "December",
      Date: "2024",
      summary: "",
    },
    {
      EventName: "NASA‚ Lunar Trailblazer,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2022/08/lunar_trailblazer.png?w=300",
      Month: "",
      Date: "2024",
      summary: "",
    },
    {
      EventName: "NASA‚ X-59 First Flight,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2023/06/x-59-flight-overland-v3-16x9-web-blue-tone-down-less-saturation.jpg?w=300",
      Month: "",
      Date: "2024",
      summary: "",
    },
    {
      EventName: "NASA‚ VIPER Mission,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2023/07/viper-cdr-hero-08-lrg.jpeg?w=300",
      Month: "",
      Date: "2024",
      summary: "",
    },
    {
      EventName: "NASA‚ Artemis II Mission,Launch Schedule",
      imglink:
        "https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0474/KSC-20230920-PH-FMX01_0474~large.jpg?w=1920&h=1280&fit=clip&crop=faces%2Cfocalpoint",
      Month: "September",
      Date: "2025",
      summary: "",
    },
    {
      EventName: "NASA‚ Boeing Starliner-1,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2023/12/boeings-starliner-crew-ship-approaches-the-space-station-52096388014-o.jpg?w=300",
      Month: "September",
      Date: "2025",
      summary: "",
    },
    {
      EventName: "NASA‚ Artemis III Mission,Launch Schedule",
      imglink:
        "https://www.nasa.gov/wp-content/uploads/2020/04/hls-eva-apr2020.jpg?w=300",
      Month: "September",
      Date: "2026",
      summary: "",
    },
  ];

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 3) % cardsData.length);
  };

  const handlePrevCard = () => {
    setCurrentCard(
      (prevCard) => (prevCard - 3 + cardsData.length) % cardsData.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="h-screen flex relative overflow-hidden flex-col max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <div className="flex items-center space-x-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handlePrevCard}
          disabled={currentCard === 0}
        >
          Prev
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleNextCard}
          disabled={currentCard === cardsData.length - 3}
        >
          Next
        </button>
      </div>
      <motion.div className="w-full flex space-x-8 overflow-x-hidden p-12 snap-x snap-mandatory">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={currentCard + i}
            variants={cardVariants}
            initial="exit"
            animate="enter"
            exit="exit"
            transition={cardTransition}
          >
            <Card
              EventName={
                cardsData[(currentCard + i) % cardsData.length].EventName
              }
              imglink={cardsData[(currentCard + i) % cardsData.length].imglink}
              Month={cardsData[(currentCard + i) % cardsData.length].Month}
              Date={cardsData[(currentCard + i) % cardsData.length].Date}
              summary={cardsData[(currentCard + i) % cardsData.length].summary}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Nasa;
