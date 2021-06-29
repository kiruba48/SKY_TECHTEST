import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import WebSocketProvider from './contexts/websocket';
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
      <WebSocketProvider>
        <BettingOddsViewProvider>
          <Header />
          <main className='py-3'>
            <Container fluid>
              <Row>
                <Col md={9}>
                  <Route path='/event/:id' component={EventScreen} exact />
                  <Route path='/' component={HomeScreen} exact />
                </Col>
                <Col md={3}>
                  <MyBetSlip />
                  {/* <Container fluid>
                </Container> */}
                </Col>
              </Row>
            </Container>
          </main>
          <Footer />
        </BettingOddsViewProvider>
      </WebSocketProvider>
    </Router>
  );
};

export default App;
