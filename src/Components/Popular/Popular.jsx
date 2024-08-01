import React, { useEffect, useState } from "react";
import "./Popular.css";
// import data_product from "../Assests/data";
import Item from "../Items/Item";

const Popular = () => {
  const [popular_products, setPopular_products] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/popularinwomen`)
      .then((response) => response.json())
      .then((data) => setPopular_products(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popular_products.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
