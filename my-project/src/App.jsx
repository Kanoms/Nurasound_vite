import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/login" component={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
