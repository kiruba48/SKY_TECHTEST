import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { MarketDataInterface } from '../state/actions/marketDataInterfaces';
import OutcomeDisplay from '../components/OutcomeDisplay';

interface PrimaryMarketComponent {
  marketData: MarketDataInterface;
}

const PrimaryMarket: React.FC<PrimaryMarketComponent> = ({ marketData }) => {
  return (
    <>
      {marketData && (
        <Accordion defaultActiveKey='0' key={marketData.marketId}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              <h5>{marketData.name}</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              {/* <Card.Body>Hello! I'm the body</Card.Body> */}

              <OutcomeDisplay
                outcomes={marketData.outcomes}
                market={marketData}
              />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </>
  );
};

export default PrimaryMarket;
