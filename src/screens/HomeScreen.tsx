import React, { useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useSelector } from '../hooks/useTypedSelector';
import Loader from '../components/Loader';
import Event from '../components/Event';
import { EventInterface } from '../state/actions/eventsAction';
import { ws } from '../ws';
import Message from '../components/outcomeComponents/Message';

const HomeScreen: React.FC = () => {
  const eventList = useSelector((state) => state.events);
  const { data: events, error, loading } = eventList;

  const sendMessage = (): void => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'getLiveEvents',
          primaryMarkets: true,
        })
      );
    };
  };

  useEffect(() => {
    // Websocket message payload
    sendMessage();

    // eslint-disable-next-line
  }, []);

  // Grouping Events by linkedEventTypeName
  let eventGroup = events.reduce((r: any, a: EventInterface) => {
    r[a.linkedEventTypeId] = [...(r[a.linkedEventTypeId] || []), a];
    return r;
  }, {});

  const eventsArray = Object.values(eventGroup);

  return (
    <>
      <Jumbotron fluid style={{ backgroundColor: 'darkblue' }}>
        <Container className='py-3'>
          <h1 style={{ color: 'white' }}>Football Live</h1>
        </Container>
      </Jumbotron>

      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}

      {!error &&
        !loading &&
        eventsArray.map((events: any) => {
          return events.map((event: EventInterface) => (
            <Event event={event} key={event.eventId} />
          ));
        })}
    </>
  );
};

export default HomeScreen;
