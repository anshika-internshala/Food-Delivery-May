import restaurantModel from "../Model/restaurant.model.js";

export function createRestaurant(req, res) {
  const { name, imageUrl, rating, cuisines, deliveryTime } = req.body;

  const newRestaurant = new restaurantModel({
    name,
    imageUrl,
    rating,
    cuisines,
    deliveryTime,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        return res.status(400).send("Something went wrong");
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function fetchRestaurants(req, res) {
  restaurantModel
    .find()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json(data);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
}

export function updateOneRestaurant(req, res) {
  const _id = req.params.id;

  restaurantModel
    .findByIdAndUpdate(_id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json(data);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
}

// Remove particular field from a document

export function updateOneRestaurantField(req, res) {
  const _id = req.params.id;

  restaurantModel
    .updateOne({ _id: _id }, { $unset: { imageId: 1 } })
    .then((data) => {
      console.log("Data", data);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      console.log("Field deleted successfully");

      res.json(data);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
}

// Delete any restaurant

export function deleteOneRestaurant(req, res) {
  const _id = req.params.id;

  restaurantModel
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json(data);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
}
