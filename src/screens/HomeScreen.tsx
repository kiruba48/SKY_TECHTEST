import React, { useEffect, useContext } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from '../hooks/useTypedSelector';
import { eventActionCreator } from '../state';
import { WebSocketContext } from '../contexts/websocket';
import Loader from '../components/Loader';
import Event from '../components/Event';
import { EventInterface } from '../state/actions/eventsAction';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const ws = useContext(WebSocketContext);

  const eventList = useSelector((state) => state.events);
  const { data: events, error, loading } = eventList;

  useEffect(() => {
    // Websocket message payload
    const eventPayload = {
      type: 'getLiveEvents',
      primaryMarkets: true,
    };

    dispatch(eventActionCreator.fetchEvents(ws, eventPayload));

    // eslint-disable-next-line
  }, [dispatch, ws]);

  // Grouping Events by linkedEventTypeName
  let eventGroup = events.reduce((r: any, a: EventInterface) => {
    r[a.linkedEventTypeId] = [...(r[a.linkedEventTypeId] || []), a];
    return r;
  }, {});

  const eventsArray = Object.values(eventGroup);
  console.log(eventsArray);

  return (
    <>
      <Jumbotron fluid style={{ backgroundColor: 'darkblue' }}>
        <Container className='py-3'>
          <h1 style={{ color: 'white' }}>Football Live</h1>
        </Container>
      </Jumbotron>

      {loading && <Loader />}
      {/* {!error &&
        !loading &&
        events.map((event, eventID) => <Event event={event} key={eventID} />)} */}
      {!error &&
        !loading &&
        eventsArray.map((events: any) => {
          return events.map((event: EventInterface, eventId: number) => (
            <Event event={event} key={eventId} />
          ));
        })}
    </>
  );
};

export default HomeScreen;
