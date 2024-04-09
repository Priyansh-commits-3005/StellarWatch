import React, { useState } from "react";
import Card from "./components/Card";
import { motion } from "framer-motion";

const cardVariants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

const cardTransition = { type: "tween", duration: 0.5 };

const Astro = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardsData = [
    {
      EventName:
        "A total solar eclipse will be visible in the Pacific Ocean, Mexico, US, southeastern Canada and the northern Atlantic Ocean.",
      imglink:
        "https://images.newscientist.com/wp-content/uploads/2024/02/27182902/SEI_193561689.jpg?width=900",
      Month: "April",
      Date: "8",
      summary: "",
    },
    {
      EventName: "September 2024 lunar eclipse",
      imglink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Full_Eclipse_of_the_Moon_as_seen_in_from_Irvine%2C_CA%2C_USA_%2852075715442%29_%28cropped%29.jpg/220px-Full_Eclipse_of_the_Moon_as_seen_in_from_Irvine%2C_CA%2C_USA_%2852075715442%29_%28cropped%29.jpg",
      Month: "September",
      Date: "18",
      summary: "",
    },
    {
      EventName: "Total solar eclipse near lunar perigee",
      imglink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Full_Eclipse_of_the_Moon_as_seen_in_from_Irvine%2C_CA%2C_USA_%2852075715442%29_%28cropped%29.jpg/220px-Full_Eclipse_of_the_Moon_as_seen_in_from_Irvine%2C_CA%2C_USA_%2852075715442%29_%28cropped%29.jpg",
      Month: "2026 August",
      Date: "12",
      summary: "",
    },
    {
      EventName: "Annular solar eclipse",
      imglink:
        "https://images.newscientist.com/wp-content/uploads/2024/02/27182902/SEI_193561689.jpg?width=900",
      Month: "2027 February ",
      Date: "6",
      summary: "",
    },
    {
      EventName: "Total solar eclipse",
      imglink:
        "https://images.newscientist.com/wp-content/uploads/2024/02/27182902/SEI_193561689.jpg?width=900",
      Month: "2027 August",
      Date: "2",
      summary: "",
    },
    {
      EventName:
        "Asteroid (137108) 1999 AN10 will pass within 388,960 km (0.0026 AU) of Earth.",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_HAP6O8WZt4LObfrGNj1TL7aTyGKpvwOawvp_ZqIzYQ&s",
      Month: "2027 August",
      Date: "7",
      summary: "",
    },
    {
      EventName: "Partial lunar eclipse",
      imglink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Full_Eclipse_of_the_Moon_as_seen_in_from_Irvine%2C_CA%2C_USA_%2852075715442%29_%28cropped%29.jpg/220px-Full_Eclipse_of_the_Moon_as_seen_in_from_Irvine%2C_CA%2C_USA_%2852075715442%29_%28cropped%29.jpg",
      Month: "2028 January",
      Date: "12",
      summary: "",
    },
    {
      EventName: "Small annular solar eclipse",
      imglink:
        "https://images.newscientist.com/wp-content/uploads/2024/02/27182902/SEI_193561689.jpg?width=900",
      Month: "",
      Date: "2024",
      summary: "",
    },
    {
      EventName:
        "A total solar eclipse will be visible across Australia, including Sydney, and New Zealand.[2] Sydney will not see another total solar eclipse until June 3, 2858. (Eclipse predictions by Fred Espenak, NASA/GSFC)[3]",
      imglink:
        "https://images.newscientist.com/wp-content/uploads/2024/02/27182902/SEI_193561689.jpg?width=900",
      Month: "2028 October ",
      Date: "26",
      summary: "",
    },
    {
      EventName:
        "NASA's New Horizons spacecraft is scheduled to leave the Solar System.",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV9QXOttfPu8qr29DId-n68zF6gsRq-Hh3lDLdQ6v1A&s",
      Month: "",
      Date: "2029",
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

export default Astro;
