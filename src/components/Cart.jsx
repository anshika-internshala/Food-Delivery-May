import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleAddItem(item) {
    console.log("Item", item);
    dispatch(addItem(item));
  }

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  return (
    <div className="flex flex-wrap m-4">
      {cartItems.map((res) => {
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
              Add+
              <h1 className="font-bold"> {res.quantity} items </h1>
            </button>
            <button
              className="border bg-green-300 h-8 relative top-16 right-5"
              onClick={() => handleRemoveItem(res)}
            >
              Remove Item
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
