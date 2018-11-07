import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavWrap = styled.div`
  right: 0;
  top: 0;
  z-index: 4;
  position: absolute;
  text-align: right;
`;

const NavList = styled.ul`
  padding: 0;
  list-style-type: none;
  background: #111;
  padding: 1rem;
  margin-right: -18px;
  font-family: 'Space Mono';
  margin-top: 0;
  & li {
    padding: 0;
  }
  a:link, a:visited {
    color: white;
  }
`;

const Trigger = styled.a`
  background: transparent;
  color: white;
  border: 0;
  padding: 0;
  font-size: 14px;
  text-transform: uppercase;
  @media screen and (min-width: 750px) {
    right: 4rem;
    font-size: 18px;
  }
  @media screen and (min-width: 375px) {
    right: 4rem;
    font-size: 16px;
  }
  &:focus, &:active {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <NavWrap>
        <Trigger onClick={this.showMenu}>
          Menu
        </Trigger>

        {
          this.state.showMenu
            ? (
              <NavList>
                <li><a href="/">Home</a></li>
                <li><a href="/info">Info</a></li>
              </NavList>
            )
            : (
              null
            )
        }
      </NavWrap>
    );
  }
}

export default Navigation;
