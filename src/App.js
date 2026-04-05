import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Hero} />
          <Route path='/services' component={Services} />
          <Route path='/process' component={Process} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;