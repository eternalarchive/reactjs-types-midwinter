import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import StatisticsPage from './pages/StatisticsPage';
import TicketsPage from './pages/TicketsPage';
import history from './utils/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={SignInPage} exact />
        <Route path="/tickets" component={TicketsPage} exact />
        <Route path="/statistics" component={StatisticsPage} exact />
        <Route path="/" component={CalendarPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
