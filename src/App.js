import "./App.css";
import Main from "./components/Main";
import scrollnav from "scrollnav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./contexts/AuthContext";
import EditProfile from "./components/EditProfile";

function App() {
  let mainContent = document.getElementById("main-content");
  const content = mainContent;
  scrollnav.init(content);
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
