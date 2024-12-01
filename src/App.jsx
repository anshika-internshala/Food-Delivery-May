import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [username, setUserName] = useState("ABC");
  return (
    <>
      <Provider store={appStore}>
        <userContext.Provider
          value={{
            loggedInUser: username,
            setUserName,
          }}
        >
          <Header />
        </userContext.Provider>
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
