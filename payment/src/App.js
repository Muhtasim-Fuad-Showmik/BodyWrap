import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pay from './pages/Pay';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
