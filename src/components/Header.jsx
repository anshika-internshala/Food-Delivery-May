import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Login from "./Login";
import { useState } from "react";

function Header() {
  const onlineStatus = useOnlineStatus();

  const userInfo = useContext(userContext);

  const { loggedInUser } = userInfo;

  const items = useSelector((state) => state.cart.items);

  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
    setIsVisible(true);
  }

  function closeModal() {
    setIsVisible(false);
  }
  //console.log("userInfo", username);
  return (
    <>
      <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <h1 class="w-3/12">
          <img
            src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
            alt=""
            width="80px"
            height="80px"
          />
        </h1>

        {loggedInUser}

        <nav class="nav font-semibold text-lg">
          <ul class="flex items-center">
            <li>{onlineStatus ? "🟢" : "🔴"}</li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link to="/">Home</Link>
            </li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link to="/search">Search</Link>
            </li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/offers">Offers</Link>
            </li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/help">Help</Link>
            </li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link onClick={openModal}>Sign IN</Link>
            </li>
          </ul>
        </nav>
        <Login isVisible={isVisible} onClose={closeModal}></Login>

        <div class="w-3/12 flex justify-end">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>

          {items.length}
        </div>
      </header>
    </>
  );
}

export default Header;
