import * as React from 'react';
import { Element, Link } from 'react-scroll';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { PersonalInfo } from '../../types';
import Row from './Row';
import { media } from '../styles/utils';

interface HeaderProps {
  navRef: React.RefObject<HTMLElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  data: PersonalInfo;
}

class Header extends React.Component<HeaderProps> {
  readonly renderNetworks = () =>
    this.props.data.socialNetworks.map(({ name, url, icon }) => (
      <SocialListItem key={name}>
        <SocialLink href={url} target="_blank">
          <FontAwesomeIcon icon={['fab', icon as IconName]} />
        </SocialLink>
      </SocialListItem>
    ));

  render(): React.ReactNode {
    const {
      data: {
        name,
        occupation,
        description,
        degree,
        school,
        address: { city, state },
      },
    } = this.props;

    return (
      <div ref={this.props.homeRef}>
        <HeaderWrapper name="home" id="home">
          <Navbar id="navbar" innerRef={this.props.navRef}>
            <MobileBtn href="#navbar" title="Show Navbar">
              Show Navbar
            </MobileBtn>
            <MobileBtn href="#home" title="Hide Navbar">
              Hide Navbar
            </MobileBtn>

            <ul id="nav">
              <NavListItem>
                <Link activeClass="activeLink" to="home" spy smooth>
                  Home
                </Link>
              </NavListItem>
              <NavListItem>
                <Link activeClass="activeLink" to="about" spy smooth>
                  About
                </Link>
              </NavListItem>
              <NavListItem>
                <Link activeClass="activeLink" to="resume" spy smooth>
                  Resume
                </Link>
              </NavListItem>
              <NavListItem>
                <Link activeClass="activeLink" to="portfolio" spy smooth>
                  Portfolio
                </Link>
              </NavListItem>
              <NavListItem>
                <Link activeClass="activeLink" to="testimonials" spy smooth>
                  Testimonials
                </Link>
              </NavListItem>
              <NavListItem title="contact">
                <Link activeClass="activeLink" to="contact" spy smooth>
                  Contact
                </Link>
              </NavListItem>
            </ul>
          </Navbar>

          <Banner>
            <Heading>{name}</Heading>
            <SubHeading>
              I'm an{' '}
              <span>
                {city}, {state}
              </span>{' '}
              based <span>{occupation}</span>. {description}
              <span>{degree}</span> from <span>{school}</span>.
            </SubHeading>
            <SocialList>{this.renderNetworks()}</SocialList>
          </Banner>

          <ScrolldownBtn to="about" spy smooth>
            <FontAwesomeIcon icon="chevron-circle-down" />
          </ScrolldownBtn>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;

const HeaderWrapper = styled(Element)`
  position: relative;
  width: 100%;
  height: 800px;
  min-height: 500px;
  background: #161415 url('/images/header-bg.jpg') no-repeat top center;
  background-size: cover;
  text-align: center;
  overflow: hidden;
  z-index: 1;

  &:after {
    z-index: -1;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle farthest-side at bottom, transparent, rgba(0, 0, 0, 1) 100%);
    opacity: 0.45;
  }

  /* vertically center banner section */
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

const Banner = styled(Row)`
  display: inline-block;
  vertical-align: middle;
  width: 85%;
  padding-bottom: 30px;

  /* ${media.tablet`
    padding-bottom: 12px;
  `}; */
`;

// TODO: FIX Responsive text
const Heading = styled.h1`
  font: 90px/1.1em 'Open Sans', sans-serif;
  font-weight: 700;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);

  ${media.desktop`
    font: 80px/1.1em 'Open Sans', sans-serif;
    letter-spacing: -1px;
    margin: 0 auto 12px auto;
  `};

  ${media.tablet`
    font: 78px/1.1em 'Open Sans', sans-serif;
    letter-spacing: -1px;
  `};
`;

const SubHeading = styled.h3`
  font: 18px/1.9em 'Libre Baskerville', serif;

  color: #a8a8a8;
  margin: 0 auto;
  width: 70%;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

  span {
    color: #fff;
  }

  ${media.tablet`
    font: 17px/1.9em 'Libre Baskerville', serif;
    width: 80%;
  `};
`;

/* Social Links */
const SocialList = styled.ul`
  margin: 24px 0;
  padding: 0;
  font-size: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
`;

const SocialListItem = styled.li`
  display: inline-block;
  margin: 0 15px;
`;

const SocialLink = styled.a`
  transition: all 0.3s ease-in-out;
  color: #fff;
  &:hover {
    color: #11abb0;
  }
`;

/* Scrolldown button */
const ScrolldownBtn = styled(Link)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -29px;
  display: block;
  height: 42px;
  width: 42px;
  font-size: 42px;
  line-height: 42px;
  transition: all 0.3s ease-in-out;
  color: #fff;
  &:hover {
    color: #11abb0;
  }
`;

const MobileBtn = styled.a``;

const Navbar = styled.nav`
  width: 100%;
  font: 12px 'Open Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  transition: opacity 0.3s ease-in-out;

  /* Hide toggle buttons */
  ${MobileBtn} {
    display: none;
  }

  &.opaque {
    background-color: #333;
  }

  ${media.mobile`
    ul#nav {
      width: auto;
      float: none;
    }
  `};

  ${media.tablet`
    font: 11px 'Open Sans', sans-serif;
    font-weight: 700;
    letter-spacing: 1.5px;
  `};
`;

const NavListItem = styled.li`
  list-style: none;
  display: inline-block;
  height: 48px;

  /* 8px padding top + 8px padding bottom + 32px line-height = 48px */
  a {
    display: inline-block;
    padding: 8px 12px;
    line-height: 32px;
    text-decoration: none;
    color: #fff;

    transition: color 0.2s ease-in-out;

    &.activeLink {
      color: #11abb0;
    }

    &:hover {
      color: #15e6ed;
    }
    &:active {
      background-color: transparent;
    }
  }
`;
