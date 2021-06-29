import React, { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import { BettingOddsViewContext } from '../contexts/BettingOddsViewProvider';

const Header: React.FC = () => {
  const { bettingView, changeBettingView } = useContext(BettingOddsViewContext);

  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>SKY Betting and Gaming</Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
          <DropdownButton
            id='dropdown-item-button'
            title={bettingView}
            variant='danger'
          >
            <Dropdown.ItemText>Toggle to change</Dropdown.ItemText>
            <Dropdown.Item
              as='button'
              onClick={changeBettingView}
              value='decimal'
            >
              Decimal
            </Dropdown.Item>
            <Dropdown.Item
              as='button'
              onClick={changeBettingView}
              value='fractional'
            >
              Fractional
            </Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
