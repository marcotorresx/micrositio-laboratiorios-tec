import Navbar from "components/Navbar/Navbar";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_container">
        <Router />
      </div>
    </div>
  );
}

export default App;
