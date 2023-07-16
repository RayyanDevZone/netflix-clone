import React from "react";
import Card from "./Card";
import "./Row.scss";

const Row = ({ title, arr = [] ,imgurl}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="imgs">
        {arr.map((item,index) => (
          <Card
          key={index}
            img={`${imgurl}/${item.poster_path}`
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
