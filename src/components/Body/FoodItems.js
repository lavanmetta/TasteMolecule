import React from "react";

function FoodItems(props) {
  const { foodItems } = props;
//   const {} = foodItems?.groupedCard?.cardGroupMap?.REGULAR?.cards
  console.log(foodItems);

  return (
    <div>
      <div className="food-item-container">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ett3pifsumx32mayklfy" />
        <div>
          <h3>Chicken 65</h3>
          <h5>159</h5>
          <p>
            Serves 1 | Boneless chicken marinated with chilli powder, turmeric
            powder, salt, garam masala and ginger garlic paste etc. halal
          </p>
        </div>
        <div className="btn-cart">
          <button>
            <i className="ri-add-line"></i>
          </button>
          <h4>0</h4>
          <button>
            <i className="ri-subtract-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodItems;
