import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// Component imports
import NavBar from './components/Navbar';
import GitHeatMap from './components/GitHeatMap';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import NamePanel from './components/NamePanel';

// Image imports
import nasaImg from './assets/images/nasa.jpg';

function App() {
  return (
    <div className="app-layout">
      {/* Header and Social Icons */}
      <div className="app-grid-cell app-grid-left">
        <NamePanel />
      </div>
      {/* Middle image */}
      <div className="app-grid-cell app-grid-middle">
        <GitHeatMap backgroundImage={nasaImg} />
      </div>
      {/* Sub Page Navigation */}
      <div className="app-grid-cell app-grid-right">
        <div className="right-panel-content">
          <Router basename={import.meta.env.BASE_URL}>
            <Switch>
              <Route exact path="/">
                <NavBar />
              </Route>
              <Route path="/projects">
                <ProjectPage />
              </Route>
              <Route path="/resume">
                <ResumePage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
