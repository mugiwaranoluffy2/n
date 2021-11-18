import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-redux";
import Dashboard from "./components/Dashboard";
import { EditUser } from "./components/EditUser";

export default function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
