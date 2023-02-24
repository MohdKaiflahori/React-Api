import React from "react";
import { Link } from "react-router-dom";

export default function ApiPage(props) {
  const { data, route } = props;

  return (
    <div className="card">
      <img className="imgBox" src={data.thumbnail} alt={data.title} />
      {/* <p>{data.id}</p> */}
      <div className="contentBox">
        <p>{data.brand}</p>
        <h3>{data.title}</h3>
        <h2 className="price">{`$${data.price}`}</h2>
        <p>{data.description}</p>
        <Link to={`/${route}`}>
          <button>Buy now</button>
        </Link>
      </div>
    </div>
  );
}
