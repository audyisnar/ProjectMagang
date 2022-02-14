import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <Router >
      <Switch>
        <div className="app-content">
          <Dashboard />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}
export default App;