import React from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route, Switch,
  Redirect
} from 'react-router-dom';
import { Layout } from 'antd';
import { routes } from './routes';
import NavigationBar from './components/NavigationBar/NavigationBar';
import styles from './app.less';

const App = (props) => {
  const routesConnectProps = routes(props);
  const renderSwitch = () => (
    <Switch>
      {routesConnectProps.map(route => (
        <Route
          key={route.path}
          exact={route.isExact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect from='*' to='/products' />
    </Switch>
  );

  return (
    <Router>
      <main className={styles.appContent}>
        <NavigationBar
          routes={routesConnectProps.filter(route => route.isNavBar)}
        />
        <Layout.Content>
          {renderSwitch()}
        </Layout.Content>
      </main>
    </Router>
  );
};

const mapStateToProps = (props) => props;

export default connect(mapStateToProps)(App);
