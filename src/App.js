import { Routes, Route, useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <Routes history={history}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
