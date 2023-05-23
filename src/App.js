import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Riders from './pages/Riders';
import RiderList from './pages/Riders/RiderList';
import RiderStatus from './pages/Riders/RiderStatus';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/riders' exact component={Riders} />
        <Route path='/riders/riderList' exact component={RiderList} />
        <Route path='/riders/riderstatus' exact component={RiderStatus} />
      </Switch>
    </Router>
  );
}

export default App;
