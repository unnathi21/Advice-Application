import React from "react";
import AdviceCard from "../components/AdviceCard.jsx";

function Transport() {
  const adviceList = [
    { title: "Plan Ahead", advice: "Check traffic and plan your route in advance." },
    { title: "Use Public Transport", advice: "It reduces stress and saves money." },
  ];

  return (
    <div>
      <h2>Transport Advice</h2>
      {adviceList.map((item, index) => (
        <AdviceCard key={index} title={item.title} advice={item.advice} />
      ))}
    </div>
  );
}

export default Transport;
