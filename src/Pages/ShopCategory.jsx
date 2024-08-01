import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assests/dropdown_icon.png";
import Item from "../Components/Items/Item";
import "./CSS/ShopCategory.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
