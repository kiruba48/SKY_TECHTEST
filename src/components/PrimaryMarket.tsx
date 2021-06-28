import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { MarketDataInterface } from '../state/actions/marketDataInterfaces';
import OutcomeDisplay from '../components/OutcomeDisplay';

interface PrimaryMarketComponent {
  marketData: MarketDataInterface[];
}

const PrimaryMarket: React.FC<PrimaryMarketComponent> = ({ marketData }) => {
  // console.log(marketData.outcome);

  // const allOutcomes = marketData.outcomes

  return (
    <>
      {marketData.map((market) => (
        <Accordion defaultActiveKey='0' key={market.marketId}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              {market.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              {/* <Card.Body>Hello! I'm the body</Card.Body> */}

              <OutcomeDisplay outcomes={market.outcomes} />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
};

export default PrimaryMarket;
