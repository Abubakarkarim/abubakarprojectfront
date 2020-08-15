import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import EveryDay from "../Pages/EveryDay";
import NightDeals from "../Pages/NightDeals";
import Bucket from "../Pages/Bucket";
import Error from "../Pages/Error";
import N from "../Pages/N";
import admincrud from "../Pages/admincrud";
import LoginForm from "../Pages/LoginForm";
import OrderForm from "../Pages/OrderForm";
import ViewDish from "../Pages/viewdish";
import Form from "../Pages/Form";

export default function CustomeRoute() {
  return (
    <Router>
      
      <N />
     
      <div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          
          <Route path="/everyday" component={EveryDay} />
          <Route path="/NightDeals" component={NightDeals} />
          <Route path="/bucket" component={Bucket} />
          <Route path="/addform" component={Form} />
          <Route path="/admincrud" component={admincrud} />
          <Route path="/viewdish" component={ViewDish} />        
         
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
