import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../hooks/useTypedSelector';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row, Badge } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { EventInterface } from '../state/actions/eventsAction';
import { WebSocketContext } from '../contexts/websocket';
import { marketDataActionCreator } from '../state';
import PrimaryMarket from './PrimaryMarket';

interface EventComponent {
  event: EventInterface;
}

const Event: React.FC<EventComponent> = ({ event }) => {
  const ws = useContext(WebSocketContext);
  const eventDate = new Date(event.startTime);
  const eventStartTime = eventDate.toString().substring(15, 21); // To extract startTime
  const dispatch = useDispatch();
  const marketId = event.markets[0]; // to extract market ID

  const marketData = useSelector((state) => state.marketData);
  const { data: primaryMarket } = marketData;
  // Filtering the primary market with event Id to populate the data
  const eventPrimaryMarket = primaryMarket.filter(
    (market) => market.eventId === event.eventId
  );

  useEffect(() => {
    // Payload to get market data
    const marketDataPayload = {
      type: 'getMarket',
      id: marketId,
    };

    if (event.eventId) {
      dispatch(marketDataActionCreator.fetchMarketData(ws, marketDataPayload));
    }
  }, [dispatch, ws, marketId, event]);

  return (
    <ListGroup>
      <LinkContainer to={`/event/${event.eventId}`}>
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
        <PrimaryMarket marketData={eventPrimaryMarket} />
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Event;
