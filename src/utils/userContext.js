import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Anshika Agarwal",
  printName: function () {
    console.log("Function inside context");
  },
});

export default userContext;
