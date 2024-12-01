import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Memo from "./components/Memo.jsx";
import Ref from "./components/Ref.jsx";
import ProfileClassBased from "./components/ProfileClassBased.jsx";
import Cart from "./components/Cart.jsx";
import { lazy, Suspense } from "react";

const Offers = lazy(() => import("./components/Offers.jsx"));
const SignIn = lazy(() => import("./components/SignIn.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<h1>Loading Component</h1>}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/memo",
        element: <Memo />,
      },
      {
        path: "/ref",
        element: <Ref />,
      },
      {
        path: "profile",
        element: <ProfileClassBased name="Internshala" />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/signIn",
    element: (
      <Suspense fallback={<h1>Loading SignIn Component</h1>}>
        <SignIn />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
