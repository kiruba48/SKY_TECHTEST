import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import BettingOddsViewProvider from './contexts/BettingOddsViewProvider';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import MyBetSlip from './components/MyBetSlip';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <BettingOddsViewProvider>
        <Header />
        <main className='py-3'>
          <Container fluid>
            <Row>
              <Col md={8}>
                <Route path='/event/:id' component={EventScreen} />
                <Route path='/' component={HomeScreen} exact />
              </Col>
              <Col md={4}>
                <MyBetSlip />
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </BettingOddsViewProvider>
    </Router>
  );
};

export default App;
