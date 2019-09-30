import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot, setConfig } from 'react-hot-loader';
import { withRouter } from 'react-router';
/* --- Components --- */
import App from '../app';
import Loader from '../src/components/loader';
/* --- Routes --- */
import UserGuards from './userGuards';
import AdminGuards from './adminGuards';
import LoggedOutRoute from './loggedOutRoute';
import Home from '../src/components/home/homeContainer';

/* --- AUTH --- */
const Login = Loader({
  loader: () =>
    import('../src/components/auth/login/loginContainer' /* webpackChunkName: 'Login' */),
});

const Forgot = Loader({
  loader: () =>
    import('../src/components/auth/login/forgotContainer' /* webpackChunkName: 'Forgot' */),
});

const Reset = Loader({
  loader: () =>
    import('../src/components/auth/password/resetPwContainer' /* webpackChunkName: 'Reset' */),
});

/* --- ADMIN --- */
const UserAccountForAdmin = Loader({
  loader: () =>
    import('../src/components/admin/userAccount/userAccountContainer' /* webpackChunkName: 'UserAccount' */),
});

const BankAccount = Loader({
  loader: () =>
    import('../src/components/admin/bankAccount/bankAccountContainer' /* webpackChunkName: 'BankAccount' */),
});

const CateringRates = Loader({
  loader: () =>
    import('../src/components/admin/rates/ratesContainer' /* webpackChunkName: 'CateringRatesAccount' */),
});

const AdminAccount = Loader({
  loader: () =>
    import('../src/components/admin/adminAccount/adminAccountContainer' /* webpackChunkName: 'AdminAccount' */),
});

const RestoSales = Loader({
  loader: () =>
    import('../src/components/admin/resto/restoContainer' /* webpackChunkName: 'RestoSales' */),
});

const AdminCatering = Loader({
  loader: () =>
    import('../src/components/admin/catering/cateringContainer' /* webpackChunkName: 'AdminCatering' */),
});

const AdminSpecailMeal = Loader({
  loader: () =>
    import('../src/components/admin/specialMeal/specialMealContainer' /* webpackChunkName: 'AdminCatering' */),
});

const AdminInvoice = Loader({
  loader: () =>
    import('../src/components/admin/invoice/invoiceContainer' /* webpackChunkName: 'AdminCatering' */),
});

/* --- USER --- */
const UserAccount = Loader({
  loader: () =>
    import('../src/components/users/userAccount/userAccountContainer' /* webpackChunkName: 'UserAccount' */),
});

const UserCatering = Loader({
  loader: () =>
    import('../src/components/users/catering/cateringContainer' /* webpackChunkName: 'UserAccount' */),
});

const UserSpecialMeal = Loader({
  loader: () =>
    import('../src/components/users/specialMeal/specialMealContainer' /* webpackChunkName: 'UserAccount' */),
});

/* --- ECS --- */
const Invoice = Loader({
  loader: () =>
    import('../src/components/invoice/invoiceContainer' /* webpackChunkName: 'NoMatch' */),
});

const NoMatch = Loader({
  loader: () =>
    import('../src/components/noMatch' /* webpackChunkName: 'NoMatch' */),
});

const routes = () => (
  <div>
    <App />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* --- AUTH --- */}
      <LoggedOutRoute path="/login" component={Login} />
      <LoggedOutRoute path="/auth/forgot" component={Forgot} />
      <Route path="/reset" component={Reset} />
      {/* --- ADMIN --- */}
      {/* 식수현황 */}
      <Route
        exact
        path="/admin/count/catering/dd"
        component={AdminGuards(AdminCatering)}
      />
      <Route
        exact
        path="/admin/count/restaurant/dd"
        component={AdminGuards(RestoSales)}
      />
      <Route
        exact
        path="/admin/count/specialmeal"
        component={AdminGuards(AdminSpecailMeal)}
      />
      {/* 인보이스 */}
      <Route
        exact
        path="/admin/invoice/users"
        component={AdminGuards(AdminInvoice)}
      />
      {/* 고객관리 */}
      <Route
        exact
        path="/admin/account/rates"
        component={AdminGuards(CateringRates)}
      />
      <Route
        exact
        path="/admin/account/users"
        component={AdminGuards(UserAccountForAdmin)}
      />
      {/* 유청계정 */}
      <Route
        exact
        path="/admin/account"
        component={AdminGuards(AdminAccount)}
      />
      <Route
        exact
        path="/admin/account/bank"
        component={AdminGuards(BankAccount)}
      />
      {/* Invoice */}
      <Route exact path="/invoice/:id" component={Invoice} />
      {/* --- USER --- */}
      <Route exact path="/user/catering" component={UserGuards(UserCatering)} />
      <Route
        exact
        path="/user/special-meal"
        component={UserGuards(UserSpecialMeal)}
      />
      <Route exact path="/user/account" component={UserGuards(UserAccount)} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

// enable to use react-hot-loader with React Hooks
setConfig({
  // set this flag to support SFC if patch is not landed
  pureSFC: true,
  showReactDomPatchNotification: false,
});

const Routes =
  !module.hot || process.env.NODE_ENV === 'production'
    ? routes
    : hot(module)(routes);

export default withRouter(Routes);
