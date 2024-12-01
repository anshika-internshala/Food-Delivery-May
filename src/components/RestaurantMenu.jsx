import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function RestaurantMenu() {
  const params = useParams();
  const dispatch = useDispatch();

  const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  function handleAddItem(item) {
    console.log("Item", item);
    dispatch(addItem(item));
  }

  async function fetchMenuItems() {
    console.log("id", params.id);
    const response = await fetch(
      `https://food-delivery-may.onrender.com/api/restaurantMenuItems/${params.id}`
    );
    const data = await response.json();

    console.log("data", data);

    setRestaurantMenuItems(data);
  }

  return (
    <div className="flex flex-wrap m-4">
      {restaurantMenuItems.map((res) => {
        return (
          <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
            <div className="flex flex-col w-3/4">
              <h1>{res.name}</h1>
              <h1>{res.defaultPrice}</h1>
              <h1>{res.description}</h1>
            </div>
            <img
              className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
              src={res.imageUrl}
              alt=""
            />
            <button
              className="border bg-green-300 h-8 relative top-16 right-5"
              onClick={() => handleAddItem(res)}
            >
              Add +
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
