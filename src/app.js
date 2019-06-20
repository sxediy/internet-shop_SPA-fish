import React from 'react';

import {
  BrowserRouter as Router,
  Route, Switch,
  Redirect
} from 'react-router-dom';
import { Layout } from 'antd';
import { routes } from './routes';
import NavigationBar from './components/NavigationBar/NavigationBar';
import styles from './app.less';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => (
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
          routes={routes.filter(route => route.isNavBar)}
        />
        <Layout.Content>
          {renderSwitch()}
        </Layout.Content>
      </main>
    </Router>
  );
};


export default App;
