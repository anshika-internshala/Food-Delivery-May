function TopRatedRestaurants(props) {
  function filterTopRatedRestaurants() {
    console.log("Top rated restaurants");
    const topRatedRestaurants = props.restaurants.filter(
      (res) => res.rating >= 4.5
    );

    props.filterFunc(topRatedRestaurants);
  }

  return (
    <>
      <button
        className="border border-black-400 mx-5"
        onClick={filterTopRatedRestaurants}
      >
        TopRatedRestaurants
      </button>
    </>
  );
}

export default TopRatedRestaurants;
