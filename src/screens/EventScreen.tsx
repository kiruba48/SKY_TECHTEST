import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { useSelector } from '../hooks/useTypedSelector';
import { Jumbotron, Container, Badge } from 'react-bootstrap';
import { ws } from '../ws';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/outcomeComponents/Message';
import Event from '../components/Event';
import { eventDataActionCreator } from '../state';

interface TParams {
  id: string;
}

const EventScreen = ({ match }: RouteComponentProps<TParams>) => {
  const dispatch = useDispatch();

  const eventId = Number(match.params.id); // converting to

  const {
    loading,
    error,
    data: eventData,
  } = useSelector((state) => state.eventData);

  const eventDate = eventData && new Date(eventData.startTime);
  const eventStartTime = eventDate && eventDate.toString().substring(15, 21); // To extract startTime

  // console.log(eventData);

  const sendMessage = () => {
    ws.send(
      JSON.stringify({
        type: 'getEvent',
        id: eventId,
      })
    );
  };

  useEffect(() => {
    if (eventData) {
      dispatch(eventDataActionCreator.resetEventData());
    }
    sendMessage();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {!loading && !error && eventData && (
        <Jumbotron
          fluid
          style={{ backgroundColor: 'darkblue', height: '30vh' }}
        >
          <Container>
            <h1 style={{ color: 'white', fontWeight: 'bold' }} className='py-3'>
              {eventData.typeName}
            </h1>
            <Row>
              <Col md={2} style={{ color: 'white' }}>
                {eventData.linkedEventTypeName}
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <h4 style={{ color: 'white' }}>
                          {eventData.competitors[0].name}
                        </h4>
                      </Col>
                      <Col md={6}>
                        <Badge
                          className='p-3'
                          variant='danger'
                          style={{
                            backgroundColor: 'white',
                            color: 'black',
                            marginLeft: '4rem',
                            borderRadius: '0.5rem',
                          }}
                        >
                          {eventData.scores.home}
                        </Badge>
                      </Col>
                    </Row>
                  </Col>
                  {/*  */}
                  <Col md={6}>
                    <Row>
                      <Col md={3}>
                        <Badge
                          className='p-3'
                          variant='danger'
                          style={{
                            backgroundColor: 'white',
                            color: 'black',
                            marginRight: '5rem',
                            borderRadius: '0.5rem',
                          }}
                        >
                          {eventData.scores.away}
                        </Badge>
                      </Col>
                      <Col md={9}>
                        <h4 style={{ color: 'white' }}>
                          {eventData.competitors[1].name}
                        </h4>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={2} style={{ color: 'white' }}>
                {' '}
                Event Start Time:
                {eventStartTime}
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      )}
      <Container className='mt-3'>
        {eventData && <Event event={eventData} screen='event' />}
      </Container>
    </>
    // <div></div>
  );
};

export default EventScreen;
