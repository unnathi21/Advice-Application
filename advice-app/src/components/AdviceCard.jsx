import React from "react";

function AdviceCard({ title, advice }) {
  return (
    <div className="advice-card">
      <h3>{title}</h3>
      <p>{advice}</p>
    </div>
  );
}

export default AdviceCard;
