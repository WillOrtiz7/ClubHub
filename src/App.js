import "./App.css";
import Main from "./components/Main";
import scrollnav from "scrollnav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  let mainContent = document.getElementById("main-content");
  const content = mainContent;
  scrollnav.init(content);
  console.log(content);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
