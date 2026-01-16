import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

// Component imports
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import SocialsIcon from './components/SocialsIcon';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

// Image imports
import nasaImg from './assets/images/nasa.jpg';
import githubIcon from './assets/images/github.png';
import linkedinIcon from './assets/images/linkedIn.png';

function App() {
  // page code
  return (
    <Row fluid className="m-0 vh-100 vw-100 overflow-hidden position-absolute">
      {/* Header and Social Icons */}
      <Col className="align-items-center d-flex m-2">
        <Container>
          <Row>
            <Hero title={'Lloyd Dakin'} subtitle={'Software Engineer'} />
          </Row>
          <Row style={{ gap: '10px' }} id="socials-row">
            <SocialsIcon
              href="https://github.com/LTDakin?tab=repositories"
              src={githubIcon}
              alt="github icon"
            />
            <SocialsIcon
              href="https://www.linkedin.com/in/lloyd-dakin/"
              src={linkedinIcon}
              alt="linkedin icon"
            />
          </Row>
        </Container>
      </Col>
      {/* Middle image */}
      <Col className="align-items-center d-flex p-0">
        <img
          src={nasaImg}
          alt={'forest'}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </Col>
      {/* Sub Page Navigation */}
      <Col
        className="align-items-center d-flex p-0 vh-100 overflow-auto"
        xl={6}
      >
        <Container className="p-0 h-100">
          <Router basename={process.env.PUBLIC_URL}>
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
        </Container>
      </Col>
    </Row>
  );
}

export default App;
