import React from "react";
import Banner from "../Components/Banner/Banner";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Banner />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
