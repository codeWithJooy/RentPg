import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
