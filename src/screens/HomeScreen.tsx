import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../hooks/useTypedSelector';
import { eventActionCreator } from '../state';
import { WebSocketContext } from '../contexts/websocket';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const ws = useContext(WebSocketContext);

  const eventList = useSelector((state) => state.events);
  const { data: events, error, loading } = eventList;
  console.log(events);

  useEffect(() => {
    const eventPayload = {
      type: 'getLiveEvents',
      primaryMarkets: true,
    };

    dispatch(eventActionCreator.fetchEvents(ws, eventPayload));

    // eslint-disable-next-line
  }, [dispatch, ws]);
  return (
    <div>
      APP
      <ul>
        {!error &&
          !loading &&
          events.length !== 0 &&
          events.map((event, eventID) => <li key={eventID}>{event.name}</li>)}
      </ul>
    </div>
  );
};

export default HomeScreen;
