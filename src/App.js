import React from "react";
import { getCategories } from "context/actions";
import { Context } from "context/Context";
import "./App.css";
import Layout from "components/Layout/Layout";
import Loader from "components/Loader/Loader";

function App() {
  const [readyToRender, setReadyToRender] = React.useState(false);
  const { setCategories } = React.useContext(Context);

  // Before render
  async function beforeRender() {
    const categories = await getCategories();
    if (categories) setCategories(categories);

    setReadyToRender(true);
  }

  React.useEffect(() => {
    beforeRender();
    // eslint-disable-next-line
  }, []);

  return readyToRender ? <Layout /> : <Loader />;
}

export default App;
