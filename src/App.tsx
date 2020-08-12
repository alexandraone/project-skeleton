import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
