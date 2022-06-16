import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <section className="App">
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <MainDash></MainDash>
        <RightSide></RightSide>
        <div></div>
      </div>
    </section>
  );
}

export default App;
