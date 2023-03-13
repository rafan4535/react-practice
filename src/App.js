// import "./styles.css";

import BottomBar from "./components/BottomBar";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <section>
        <NavBar />
        <MainBody />
        <BottomBar />
      </section>
    </div>
  );
}

export default App;
