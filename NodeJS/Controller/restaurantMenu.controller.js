import restaurantMenuModel from "../Model/restaurantMenu.model.js";

export function createRestaurantMenuItem(req, res) {
  const { name, imageUrl, defaultPrice, description, restaurantId } = req.body;

  const newRestaurantMenuItem = new restaurantMenuModel({
    name,
    imageUrl,
    defaultPrice,
    description,
    restaurantId,
  });

  newRestaurantMenuItem
    .save()
    .then((data) => {
      if (!data) {
        return res.status(400).send("Something went wrong");
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function fetchRestaurantMenuItems(req, res) {
  const _id = req.params.id;

  console.log("id", typeof _id);
  restaurantMenuModel
    .find({ restaurantId: _id })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.json(data);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
}
