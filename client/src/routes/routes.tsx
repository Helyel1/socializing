import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";

export const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};
