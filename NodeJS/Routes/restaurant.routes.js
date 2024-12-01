import {
  createRestaurant,
  deleteOneRestaurant,
  fetchRestaurants,
  updateOneRestaurant,
  updateOneRestaurantField,
} from "../Controller/restaurant.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export function routes(app) {
  app.post("/api/restaurant", createRestaurant);
  app.get("/api/restaurants", fetchRestaurants);
  app.put("/api/restaurant/:id", updateOneRestaurant);
  app.patch("/api/restaurantField/:id", updateOneRestaurantField);
  app.delete("/api/restaurant/:id", deleteOneRestaurant);
}
