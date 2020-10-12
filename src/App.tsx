import React from "react";
import "./CSS/Supermarket.css";
import SuperMarket from "./Components/SuperMarket";
import DevTools from "mobx-react-devtools";

function App() {
  return (
    <div>
      <SuperMarket />
      {process.env.NODE_ENV === "development" && <DevTools />}
    </div>
  );
}

export default App;
