import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector } from '../hooks/useTypedSelector';
import { Jumbotron, Container, Badge } from 'react-bootstrap';
import { EventDataInterface } from '../state/actions/eventDataInterface';
import { ws } from '../ws';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/outcomeComponents/Message';
import PrimaryMarket from '../components/PrimaryMarket';

interface TParams {
  id: string;
}

interface EDateInterface {
  loading: boolean;
  error: string;
  data: EventDataInterface;
}

const EventScreen = ({ match }: RouteComponentProps<TParams>) => {
  // console.log(match.params.id);
  const eventId = Number(match.params.id); // converting to

  const {
    loading,
    error,
    data: eventData,
  }: EDateInterface = useSelector((state) => state.eventData);

  const eventDate = new Date(eventData.startTime);
  const eventStartTime = eventDate.toString().substring(15, 21); // To extract startTime

  const sendMessage = () => {
    ws.send(
      JSON.stringify({
        type: 'getEvent',
        id: eventId,
      })
    );
  };

  useEffect(() => {
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
                      <Col md={4}>competitor-1</Col>
                      <Col md={8}>
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
                          {/* {eventData.scores.home} */}
                        </Badge>
                      </Col>
                    </Row>
                  </Col>
                  {/*  */}
                  <Col md={6}>
                    <Row>
                      <Col md={5}>
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
                          {/* {eventData.scores.away} */}
                        </Badge>
                      </Col>
                      <Col md={7}>competitor-2</Col>
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
      <Container></Container>
    </>
  );
};

export default EventScreen;
