import userContext from "../utils/userContext";
import { useContext } from "react";

function RestaurantCard(props) {
  console.log("props", props);

  const info = useContext(userContext);

  const { name, rating, cuisines, imageUrl, deliveryTime } = props.resDetails;
  return (
    <div className="m-4">
      <img
        className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
        src={imageUrl}
        alt=""
      />
      <h2>{name}</h2>
      <span>{rating}</span>
      <p>{cuisines}</p>
      <p>{deliveryTime}</p>
    </div>
  );
}

export default RestaurantCard;
