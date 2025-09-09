import React from "react";
import AdviceCard from "../components/AdviceCard.jsx";

function Emotional() {
  const adviceList = [
    { title: "Stay Calm", advice: "Take deep breaths and stay calm in stressful situations." },
    { title: "Talk it Out", advice: "Share your feelings with someone you trust." },
  ];

  return (
    <div>
      <h2>Emotional Advice</h2>
      {adviceList.map((item, index) => (
        <AdviceCard key={index} title={item.title} advice={item.advice} />
      ))}
    </div>
  );
}

export default Emotional;
