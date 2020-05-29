import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Preloader from 'components/Preloader/Preloader';

const Lesson1StartPage = Loadable({
  loader: () =>
    import(
      './modules/dashboard/pages/Lesson1StartPage' /* webpackChunkName: "Lesson1StartPage" */
    ),
  loading: () => <Preloader />,
});

const LogoutPage = Loadable({
  loader: () =>
    import(
      './modules/auth/pages/LogoutPage' /* webpackChunkName: "LogoutPage" */
    ),
  loading: () => <Preloader />,
});

const NotFoundPage = Loadable({
  loader: () =>
    import(
      './modules/landing/pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */
    ),
  loading: () => <Preloader />,
});

export default (
  <div>
    <Switch>
      <Route exact path="/lesson/1" component={Lesson1StartPage} />
      <Route exact path="/logout" component={LogoutPage} />
      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
