import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from 'Components/LandingPage';
import React from 'react';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
    </Router>
  );
};

export default App;
