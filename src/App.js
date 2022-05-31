import Navbar from "components/Navbar/Navbar";
import React from "react";
import Router from "./Router";
import { getCategories } from "context/actions";
import { Context } from "context/Context";
import "./App.css";

function App() {
  const [readyToRender, setReadyToRender] = React.useState(false);
  const { setCategories } = React.useContext(Context);

  // Before render
  async function beforeRender() {
    // Set categories
    setCategories(getCategories());

    // Set ready to render
    setReadyToRender(true);
  }

  React.useEffect(() => {
    beforeRender();
    // eslint-disable-next-line
  }, []);

  return readyToRender ? (
    <div className="App">
      <Navbar />
      <div className="app_container">
        <Router />
      </div>
    </div>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
