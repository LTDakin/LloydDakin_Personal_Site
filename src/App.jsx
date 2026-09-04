import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// Component imports
import NavBar from './components/Navbar';
import IconLink from './components/SocialsIcon';
import GitHeatMap from './components/GitHeatMap';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

// Image imports
import nasaImg from './assets/images/nasa.jpg';
import githubIcon from './assets/images/github.png';
import linkedinIcon from './assets/images/linkedIn.png';

function App() {
  return (
    <div className="app-layout">
      {/* Header and Social Icons */}
      <div className="app-grid-cell app-grid-left">
        <h1
          className="display-1 font-weight-bolder"
          style={{ fontSize: '6rem', fontFamily: 'lemonmilk' }}
        >
          Lloyd Dakin
        </h1>
        <h3 className="display-7 font-weight-light" style={{ fontSize: '3em' }}>
          Software Engineer
        </h3>
        <div className="socials-row">
          <IconLink
            href="https://github.com/LTDakin?tab=repositories"
            src={githubIcon}
            alt="github icon"
          />
          <IconLink
            href="https://www.linkedin.com/in/lloyd-dakin/"
            src={linkedinIcon}
            alt="linkedin icon"
          />
        </div>
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
