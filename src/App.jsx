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

const BP_MOBILE = '850px';
const BP_TABLET = '1300px';

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-areas: 'left middle right';
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (max-width: ${BP_TABLET}) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'left right' 'middle right';
  }

  @media (max-width: ${BP_MOBILE}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-template-areas: 'left middle' 'right right';
  }

  .app-grid-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 0;
  }

  .app-grid-left {
    grid-area: left;
    flex-direction: column;
  }

  .app-grid-middle {
    grid-area: middle;
    padding: 0;
  }

  .app-grid-right {
    grid-area: right;
    padding: 0;
    overflow-y: auto;
  }

  .right-panel-content {
    width: 100%;
    height: 100%;
  }
`;

export default App;
