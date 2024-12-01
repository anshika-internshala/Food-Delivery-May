import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useEffect, useState } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function Body() {
  const [searchedrestaurants, setSearchedRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  function setFilteredRestaurants(filteredRestaurants) {
    setSearchedRestaurants(filteredRestaurants);
  }

  console.log("component loaded or component mounted");

  useEffect(() => {
    console.log("Use Effect is called");
    fetchRestaurants();

    return () => {
      console.log("Body component unmounted");
    };
  }, []);

  async function fetchRestaurants() {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch("http://localhost:3000/api/restaurants/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `JWT ${accessToken}`,
      },
    });

    const result = await response.json();

    setSearchedRestaurants(result);

    setLoading(false);
    console.log("result", result);
  }

  return (
    <>
      <h1 className="font-bold m-5">Restaurants with online food delivery</h1>
      <Search filterFunc={setFilteredRestaurants}></Search>
      <TopRatedRestaurants
        restaurants={searchedrestaurants}
        filterFunc={setFilteredRestaurants}
      />
      <div className="flex flex-wrap mx-auto w-3/4">
        {loading ? (
          <Shimmer />
        ) : (
          searchedrestaurants.map((restaurant) => {
            return (
              <Link to={`/restaurant/${restaurant._id}`}>
                <RestaurantCard resDetails={restaurant} key={restaurant._id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}

export default Body;

// Custom Hooks
