import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          praesentium distinctio molestias in et maiores, repudiandae ipsam
          corporis error porro nesciunt cum iusto dolores eum odit! Natus
          voluptates vitae tempore voluptas at ea velit molestiae harum laborum
          asperiores eos animi voluptatem fugit iusto, sunt necessitatibus
          nulla, perferendis, laboriosam sequi rerum!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
