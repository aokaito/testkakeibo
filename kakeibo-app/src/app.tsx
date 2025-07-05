import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import Transactions from "./pages/transactions";
import Stats from "./pages/stats";
import Settings from "./pages/settings";

const App: React.FC = () => (
  <Router>
    <div className="app">
      <Navbar />
      <div>
        <h1>ズボラ家計簿へようこそ！</h1>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/stats" component={Stats} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  </Router>
);

export default App;