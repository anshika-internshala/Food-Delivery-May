import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { routes } from "./Routes/restaurant.routes.js";
import { menuRoutes } from "./Routes/restaurantMenu.routes.js";
import { userRoutes } from "./Routes/user.routes.js";

const app = express();

app.listen("3000", () => {
  console.log("Listening application on port a 3000");
});

// Built In Middlewares , Application level Middleware
app.use(express.json());
app.use(cors());

app.use(function errorHandling(req, res, next) {
  console.log("aplication level middleware");
  next();
});

// Third Party Middlewares
//app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is  running");
});

mongoose.connect(
  "mongodb+srv://internshala1:internshala1@cluster0.2u0kq.mongodb.net/"
);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Connection is successful");
});

db.on("error", () => {
  console.log("connection is not successful");
});

routes(app);
menuRoutes(app);
userRoutes(app);

const users = [
  {
    id: 1,
    firstName: "Anshika",
    lastName: "Agarwal",
    age: 27,
  },
  {
    id: 2,
    firstName: "Ram",
    lastName: "Maheshwari",
    age: 28,
  },
  {
    id: 3,
    firstName: "Tina",
    lastName: "Gupta",
    age: 27,
  },
];

function logRequest(req, res, next) {
  console.log("Request received is", req.body);
  next();
}

// GET HTTP method for fetching list of users
app.get("/users", logRequest, (req, res) => {
  res.send(users);
});

// Push a new user

app.post("/user", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;

  const newUser = {
    id: Math.random() * 10,
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  users.push(newUser);

  res.send(users);
});

// Update a user by id

app.put("/user/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const keys = Object.keys(req.body); // ["firstName" , "age"]

  keys.forEach((key) => {
    if (!user[key]) {
      return res.status(404).end("Invalid key");
    }

    user[key] = req.body[key];
  });

  res.json(users);
});

// DELETE a USER by id

app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;

  const user = users.find((user) => user.id == userId);

  if (!user) {
    return res
      .status(404)
      .json({ message: "user with this id does not exist" });
  }

  const filteredUsers = users.filter((user) => user.id != userId);

  res.json(filteredUsers);
});
