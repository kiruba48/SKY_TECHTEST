import React, { useEffect } from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row, Badge } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { EventInterface } from '../state/actions/eventsAction';
import PrimaryMarket from './PrimaryMarket';
import { ws } from '../ws';

interface EventComponent {
  event: EventInterface;
}

const Event: React.FC<EventComponent> = ({ event }) => {
  const eventDate = new Date(event.startTime);
  const eventStartTime = eventDate.toString().substring(15, 21); // To extract startTime
  // const marketId = event.markets[0]; // to extract market ID

  const marketData = useSelector((state) => state.marketData);
  const { data: primaryMarket } = marketData;
  // Filtering the primary market with event Id to populate the data
  const eventPrimaryMarket = primaryMarket.filter(
    (market) => market.eventId === event.eventId
  );
  // Taking the object out of the array.
  const primaryMarketData = eventPrimaryMarket[0];

  const sendMessage = (): void => {
    event.markets.map((marketId) => {
      ws.send(
        JSON.stringify({
          type: 'getMarket',
          id: marketId,
        })
      );
    });
  };

  useEffect(() => {
    // Payload to get market data
    if (event.eventId) {
      sendMessage();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListGroup>
      <LinkContainer to={`/event/${event.eventId}`}>
        <ListGroup.Item action>
          <Row>
            <Col md={4}>
              <h5 style={{ color: 'red', fontWeight: 'bold' }}>
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
        <PrimaryMarket marketData={primaryMarketData} />
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Event;
