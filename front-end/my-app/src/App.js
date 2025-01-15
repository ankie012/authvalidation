import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignupForm";
import SignInForm from "./components/SigninForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignInForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
