import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <section className="App">
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <MainDash></MainDash>
        <div></div>
      </div>
    </section>
  );
}

export default App;
