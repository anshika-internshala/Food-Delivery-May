import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const restaurantMenuSchema = new Schema({
  name: String,
  imageUrl: String,
  description: String,
  defaultPrice: String,
  restaurantId: String,
});

const restaurantMenuModel = mongoose.model(
  "RestaurantMenuItems",
  restaurantMenuSchema
);

export default restaurantMenuModel;
