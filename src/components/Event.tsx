import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../hooks/useTypedSelector';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row, Badge } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { EventInterface } from '../state/actions/eventsAction';
import PrimaryMarket from './PrimaryMarket';
import { ws } from '../ws';
import { EventDataInterface } from '../state/actions/eventDataInterface';
import { marketDataActionCreator } from '../state';

interface EventComponent {
  event: EventInterface | EventDataInterface;
  screen: string;
}

const Event: React.FC<EventComponent> = ({ event, screen }) => {
  const dispatch = useDispatch();

  const eventDate = new Date(event.startTime);
  const eventStartTime = eventDate.toString().substring(15, 21); // To extract startTime

  const marketData = useSelector((state) => state.marketData);
  const { data: primaryMarket } = marketData;

  // Filtering the primary market with event Id to populate the data
  const eventPrimaryMarket = primaryMarket.filter(
    (market) => market.eventId === event.eventId
  );

  const sendMessage = (): void => {
    event.markets.map((marketId) => {
      return ws.send(
        JSON.stringify({
          type: 'getMarket',
          id: marketId,
        })
      );
    });
  };

  useEffect(() => {
    //Reset marketData state
    if (primaryMarket.length !== 0) {
      dispatch(marketDataActionCreator.resetMarketData());
    }
    // Payload to get market data
    if (event.eventId) {
      sendMessage();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListGroup>
      {screen === 'home' && (
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
      )}

      <ListGroup.Item>
        {eventPrimaryMarket.map((market) => {
          return (
            market.status.displayable && (
              <PrimaryMarket marketData={market} key={market.marketId} />
            )
          );
        })}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Event;
