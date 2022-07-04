import "./App.css";
import Main from "./components/Main";
import scrollnav from "scrollnav";

function App() {
  let mainContent = document.getElementById("main-content");
  const content = mainContent;
  scrollnav.init(content);
  console.log(content);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
