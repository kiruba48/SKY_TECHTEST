import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row, Badge } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { EventInterface } from '../state/actions/eventsAction';

interface EventComponent {
  event: EventInterface;
}

const Event: React.FC<EventComponent> = ({ event }) => {
  const eventDate = new Date(event.startTime);
  const eventStartTime = eventDate.toString().substring(15, 21);
  return (
    <ListGroup>
      <LinkContainer to='/market/:marketId'>
        <ListGroup.Item action>
          <Row>
            <Col md={4}>
              <h5>
                {event.linkedEventTypeName
                  ? event.linkedEventTypeName
                  : event.typeName}
              </h5>
              <span>{eventStartTime}</span>
            </Col>
            <Col md={4}>
              <h5>{event.name}</h5>
            </Col>
            <Col md={4}>
              <Badge
                className='py-3'
                variant='danger'
                style={{
                  backgroundColor: 'darkblue',
                  marginLeft: '10rem',
                  borderRadius: '0.5rem',
                }}
              >
                {event.scores.away} - {event.scores.home}
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
      </LinkContainer>

      <ListGroup.Item>
        <ListGroup horizontal>
          <ListGroup.Item action as='button'>
            This
          </ListGroup.Item>
          <ListGroup.Item action as='button'>
            ListGroup
          </ListGroup.Item>
          <ListGroup.Item action as='button'>
            renders
          </ListGroup.Item>
        </ListGroup>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Event;
