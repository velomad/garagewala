import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/LandingPage";
import SaveLifeCases from "./pages/SaveLifeCases";
import PayCheckout from "./pages/PayCheckout";

import { WithLayoutRoute } from "./routers";

function Routes() {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={LandingPageLayout}
          component={LandingPage}
        />
        <WithLayoutRoute
          exact
          path="/cases"
          layout={LandingPageLayout}
          component={SaveLifeCases}
        />
        <WithLayoutRoute
          exact
          path="/check-out-pay-ment"
          layout={LandingPageLayout}
          component={PayCheckout}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
