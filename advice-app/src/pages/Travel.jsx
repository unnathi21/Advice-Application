import React from "react";
import AdviceCard from "../components/AdviceCard.jsx";

function Travel() {
  const adviceList = [
    { title: "Pack Light", advice: "Carry only essentials to travel comfortably." },
    { title: "Research Destinations", advice: "Learn about your destination before traveling." },
  ];

  return (
    <div>
      <h2>Travel Advice</h2>
      {adviceList.map((item, index) => (
        <AdviceCard key={index} title={item.title} advice={item.advice} />
      ))}
    </div>
  );
}

export default Travel;
