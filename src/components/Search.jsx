import { restaurantDetails } from "../utils/mockData";

function Search(props) {
  let searchTxt;

  function filterRestaurant(e) {
    console.log("event", e);
    searchTxt = e.target.value;
    const filteredRestaurants = restaurantDetails.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );

    props.filterFunc(filteredRestaurants);
  }

  return (
    <>
      <input
        type="text"
        className="border-2"
        onChange={(e) => filterRestaurant(e)}
      />
    </>
  );
}

export default Search;
