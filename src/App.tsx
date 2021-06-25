import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { eventActionCreator } from './state';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Establishing websocket connect
    const websocket = new WebSocket('ws://localhost:8889');
    console.log(websocket);

    dispatch(eventActionCreator.fetchEvents(websocket));
  });
  return <div className='App'>Mini SKY App</div>;
};

export default App;
