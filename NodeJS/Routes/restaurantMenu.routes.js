import {
  createRestaurantMenuItem,
  fetchRestaurantMenuItems,
} from "../Controller/restaurantMenu.controller.js";

export function menuRoutes(app) {
  app.post("/api/restaurantMenuItem", createRestaurantMenuItem);
  app.get("/api/restaurantMenuItems/:id", fetchRestaurantMenuItems);
}
