import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/*<img className="food-item-image" src={url+"/images/"+image} alt="food item image" />//OLD LOGIC*/}
        <img
          className="food-item-image"
          src={image}
          alt="food item image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/150?text=Image+Unavailable";
          }}
        />
        {/* New logic to handle image loading */}

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove icon"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="green add icon"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating image" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          &#8358;
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
