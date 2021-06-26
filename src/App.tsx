import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WebSocketProvider from './contexts/websocket';
import HomeScreen from './screens/HomeScreen';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <WebSocketProvider>
        <div className='App'>
          <Route path='/' component={HomeScreen} exact />
        </div>
      </WebSocketProvider>
    </Router>
  );
};

export default App;
