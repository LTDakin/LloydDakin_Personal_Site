import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Lloyd Dakin',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/About' },
        { title: 'Contact', path: '/Contact' },
      ],
      home: {
        title: 'Observe, Internalize, Explore',
        subtitle: 'Learn first, remember the key ideas, take those ideas and create new things',
        subtitle2: 'Check out my projects below'
      },
      about: {
        title: 'About Me',
        subtitle: 'Who is this guy?'
      },
      contact: {
        title: 'Hey, Let\'s Talk',
        subtitle: 'Always looking for new oppurtunities'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar bg='transparent' expand='lg'>
            <Navbar.Brand>Lloyd Dakin</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() =>
            <HomePage 
              title={this.state.home.title} 
              subtitle={this.state.home.subtitle}
              subtitle2={this.state.home.subtitle2}
            />
          }/>
          <Route path="/about" exact render={() =>
            <AboutPage 
              title={this.state.about.title} 
              subtitle={this.state.about.subtitle}
            />
          }/>
          <Route path="/contact" exact render={() =>
            <ContactPage 
              title={this.state.contact.title} 
              subtitle={this.state.contact.subtitle}
            />
          }/>
          <Footer></Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
