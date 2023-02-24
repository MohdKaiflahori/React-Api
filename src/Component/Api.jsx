import React, { useEffect } from "react";
import axios from "axios";
import "../Component/Api.css";
import ApiPage from "./ApiPage";

export default function Api() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);
  

  return (
    <div className="mainDiv">
      {data.map(
        (x, i) => data.length && (
         <ApiPage data = {x} key={i} route={i+1}/>
          )
      )}
    </div>
  );
}
