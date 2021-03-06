import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { betSlipActionCreator } from '../state';
import { BettingOddsViewContext } from '../contexts/BettingOddsViewProvider';
import { useSelector } from '../hooks/useTypedSelector';
import {
  Jumbotron,
  Container,
  ListGroup,
  Badge,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import BetSlipForm from './BetSlipForm';

const MyBetSlip: React.FC = () => {
  const bettingData = useSelector((state) => state.betSlip);

  // Accessing event data from state
  const eventList = useSelector((state) => state.events);
  const { data: events } = eventList;

  // Access Market data from state
  const marketData = useSelector((state) => state.marketData);
  const { data: markets } = marketData;

  // Betting View: Decimal and Fractional
  const { bettingView } = useContext(BettingOddsViewContext);
  const dispatch = useDispatch();

  const removeBet = (outcomeId: number) => {
    dispatch(betSlipActionCreator.removeItemAction(outcomeId));
  };

  const resetBetSlip = () => {
    dispatch(betSlipActionCreator.resetBetSlipAction());
  };

  const findMarket = (marketId: number) => {
    return markets.find((market) => {
      return market.marketId === marketId;
    });
  };

  const findEvent = (eventId: number) => {
    return events.find((event) => {
      return event.eventId === eventId;
    });
  };

  return (
    <>
      <Container>
        <Jumbotron fluid style={{ backgroundColor: 'darkblue' }}>
          <Container className='py-3'>
            <h2 style={{ color: 'white' }}>
              My Bet Slip
              <span>
                <Badge
                  className='py-3'
                  variant='danger'
                  style={{
                    backgroundColor: 'white',
                    marginLeft: '2rem',
                    borderRadius: '50%',
                    color: 'black',
                  }}
                >
                  {bettingData && bettingData.length}
                </Badge>
              </span>
            </h2>
          </Container>
        </Jumbotron>
        {bettingData && bettingData.length <= 0 && (
          <h3 className='py-3'>You have no selections in your bet</h3>
        )}
        <ListGroup>
          {bettingData &&
            bettingData.map((bet) => (
              <ListGroup.Item key={bet.outcomeId}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>{bet.name}</ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        @{' '}
                        {bettingData && bettingView === 'decimal'
                          ? bet.price.decimal
                          : bettingView === 'fractional'
                          ? `${bet.price.num} / ${bet.price.den}`
                          : null}
                      </Col>
                      <Col>
                        <Button
                          variant='danger'
                          size='sm'
                          onClick={() => removeBet(bet.outcomeId)}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>
                      {findMarket(bet.marketId)?.name} -{' '}
                      {findEvent(bet.eventId)?.name}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BetSlipForm betInput={bet.price.decimal} />
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            ))}
          {bettingData && bettingData.length > 0 && (
            <ListGroup.Item>
              <Button variant='danger' size='sm' block onClick={resetBetSlip}>
                Clear All Bets
              </Button>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Container>
    </>
  );
};

export default MyBetSlip;
