import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Splash from "./Pages/Splash/Splash";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Propert";
import AddUnit from "./Pages/Property/AddUnit/AddUnit";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" component={Splash} />
        <Route path="/home" component={Home} />
        <Route path="/property" component={Property} />
        <Route path="/property/add/unit" component={AddUnit} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
