import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import WebSocketProvider from './contexts/websocket';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <WebSocketProvider>
        <Header />
        <main className='py-3'>
          <Container fluid>
            <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </WebSocketProvider>
    </Router>
  );
};

export default App;
