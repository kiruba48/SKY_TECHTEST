import React, { createContext, ReactNode } from 'react';

export const WebSocketContext = createContext({});

interface WSProps {
  children: ReactNode;
}

const WebSocketProvider: React.FC<WSProps> = ({ children }) => {
  let ws = null;

  if (!ws) {
    //  ws: WebSocket = new WebSocket('ws://localhost:8889');
    ws = new WebSocket('ws://localhost:8889');
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
