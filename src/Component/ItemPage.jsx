import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);
  return (
    <div className="card">
      <img className="imgBox" src={data.thumbnail} alt={data.title} />
      <div className="contentBox">
      <p>{data.brand}</p>
      <h3>{data.title}</h3>
      <h2 className="price">{`$${data.price}`}</h2>
      <p>{data.description}</p>
      <button>Buy now</button>
      </div>
    </div>
  );
}
