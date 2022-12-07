import React from "react";

function VechCard({ data, length }) {
  return (
    <div
      style={{
        marginRight: data.id == length ? 0 : 70 + "px",
      }}
      className="vech_card"
    >
      <img src={data.img} />
      <div className="text">{data.name}</div>
    </div>
  );
}

export default VechCard;
