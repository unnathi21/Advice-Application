import React from "react";
import AdviceCard from "../components/AdviceCard.jsx";

function Food() {
  const adviceList = [
    { title: "Eat Healthy", advice: "Include fruits and vegetables in your daily diet." },
    { title: "Stay Hydrated", advice: "Drink at least 8 glasses of water a day." },
  ];

  return (
    <div>
      <h2>Food Advice</h2>
      {adviceList.map((item, index) => (
        <AdviceCard key={index} title={item.title} advice={item.advice} />
      ))}
    </div>
  );
}

export default Food;
