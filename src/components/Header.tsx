import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, DropdownButton, Dropdown } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>SKY Betting and Gaming</Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
          <DropdownButton id='dropdown-item-button' title='Betting Odds view'>
            <Dropdown.ItemText>Toggle to change</Dropdown.ItemText>
            <Dropdown.Item as='button'>Decimal</Dropdown.Item>
            <Dropdown.Item as='button'>Fractional</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
