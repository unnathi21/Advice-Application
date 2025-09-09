import React from "react";
import AdviceCard from "../components/AdviceCard.jsx";

function Financial() {
  const adviceList = [
    { title: "Save Money", advice: "Save at least 20% of your income each month." },
    { title: "Invest Wisely", advice: "Diversify your investments to reduce risk." },
  ];

  return (
    <div>
      <h2>Financial Advice</h2>
      {adviceList.map((item, index) => (
        <AdviceCard key={index} title={item.title} advice={item.advice} />
      ))}
    </div>
  );
}

export default Financial;
