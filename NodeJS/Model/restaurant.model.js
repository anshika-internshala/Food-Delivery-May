import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  imageUrl: String,
  rating: String,
  cuisines: String,
  deliveryTime: String,
});

const restaurantModel = mongoose.model("Restaurants", restaurantSchema);

export default restaurantModel;
