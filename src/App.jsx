import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
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
    <MainLayout>
      {/* Left Header and socials */}
      <div className="app-grid-cell app-grid-left">
        <NamePanel />
      </div>
      {/* Middle githeatmap and image */}
      <div className="app-grid-cell app-grid-middle">
        <GitHeatMap backgroundImage={nasaImg} />
      </div>
      {/* Right Sub Pages Navigation */}
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
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .app-grid-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 0;
  }

  .app-grid-left {
    flex-direction: column;
    padding: 2rem;
  }

  .app-grid-middle {
    padding: 0;
  }

  .app-grid-right {
    padding: 0;
    overflow-y: auto;
  }

  .right-panel-content {
    width: 100%;
    height: 100%;
  }
`;

export default App;
