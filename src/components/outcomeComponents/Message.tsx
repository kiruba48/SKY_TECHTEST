import React from 'react';
import { Alert } from 'react-bootstrap';

interface MessageInterface {
  variant: string;
  children: React.ReactNode;
}

const Message: React.FC<MessageInterface> = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
