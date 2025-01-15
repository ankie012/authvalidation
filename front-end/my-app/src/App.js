import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignupForm";
import SignInForm from "./components/SigninForm";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
