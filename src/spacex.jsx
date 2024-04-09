import React, { useState } from "react";
import Card from "./components/Card";
import { motion } from "framer-motion";

const cardVariants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

const cardTransition = { type: "tween", duration: 0.5 };

const SpaceX = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardsData = [
    {
      EventName:
        "SpaceX launches first mid-inclination dedicated rideshare mission",
      imglink:
        " https://i0.wp.com/spacenews.com/wp-content/uploads/2024/04/bandwagon1.jpg?resize=1200%2C900&ssl=1",
      Month: "April",
      Date: "7",
      summary: "",
    },
    {
      EventName:
        "Musk outlines plans to increase Starship launch rate and performance",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/04/booster11-staticfire.jpg?resize=800%2C600&ssl=1",
      Month: "April",
      Date: "6",
      summary: "",
    },
    {
      EventName:
        "China launches first of a new series of Yaogan reconnaissance satellites",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/04/yaogan42-01-cz2d-xlsc-2april2024-ourspace-1.jpg?resize=800%2C600&ssl=1",
      Month: "April",
      Date: "3",
      summary: "",
    },
    {
      EventName:
        "SpaceX launches Eutelsat 36D, lands booster on seventh reuse anniversary",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/03/Falcon-9-Eutelsat-36D.jpg?resize=800%2C600&ssl=1",
      Month: "March",
      Date: "31",
      summary: "",
    },
    {
      EventName: "Long March 6A launches second Yunhai-3 satellite",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/03/yunhai-3-02-CZ6AY3-TSLC-26march2024-ourspace1.jpg?resize=800%2C600&ssl=1",
      Month: "March",
      Date: "27",
      summary: "",
    },
    {
      EventName: "Soyuz launches to station after scrub",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/03/53604618757_557b4f2d12_k.jpg?resize=800%2C600&ssl=1",
      Month: "March",
      Date: "23",
      summary: "",
    },
    {
      EventName:
        "Cargo Dragon launches to space station hours after Soyuz scrub",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/03/f9-crs30.jpg?resize=800%2C600&ssl=1",
      Month: "March",
      Date: "21",
      summary: "",
    },
    {
      EventName: "Starship could have a big impact on small launch vehicles",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/03/fragnito-sat2024.jpg?resize=800%2C600&ssl=1",
      Month: "March",
      Date: "21",
      summary: "",
    },
    {
      EventName: "Electron launches NRO mission from Wallops",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/03/Rocket-Labs-Electron-rocket-lifts-off-from-LC-2-in-Wallops-Virgnia-for-NRO-mission_Credit-Austin-Adams-scaled.jpg?resize=800%2C600&ssl=1",
      Month: "March",
      Date: "21",
      summary: "",
    },
    {
      EventName: "China launches second batch of Yunhai-2 satellites",
      imglink:
        "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/03/yunhai-2-02-CZ2D-YZ3-21march2024-ourspace-1.jpg?resize=800%2C600&ssl=1",
      Month: "March",
      Date: "21",
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

export default SpaceX;
