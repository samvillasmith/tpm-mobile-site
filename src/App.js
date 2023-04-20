import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import TPMDetail from './screens/TPMDetail';
import Portfolio from './screens/Portfolio';
import Navbar from './components/Navbar';
import OrganizationalLeadership from './screens/OrganizationalLeadership';
import Products from './screens/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Portfolio}/>
          <Route path="/tpm" component={TPMDetail} />
          <Route path="/organizational_leadership" component={OrganizationalLeadership} />
          <Route path="/telmii" component={Products} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
