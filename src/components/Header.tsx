import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { PersonalInfo } from '../../types';
import Row from './Row';

interface HeaderProps {
  navRef: React.RefObject<HTMLElement>;
  setRef: (ref: HTMLElement) => void;
  scrollTo: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  data: PersonalInfo;
  innerRef?: () => void;
}

class Header extends React.Component<HeaderProps> {
  readonly renderNetworks = () =>
    this.props.data.socialNetworks.map(({ name, url, icon }) => (
      <SocialListItem key={name}>
        <a href={url} target="_blank">
          <FontAwesomeIcon icon={['fab', icon as IconName]} />
        </a>
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
      setRef,
      scrollTo,
    } = this.props;

    return (
      <div ref={this.props.innerRef}>
        <HeaderWrapper id="home" className="overlay" innerRef={setRef}>
          <Navbar id="navbar" innerRef={this.props.navRef}>
            <MobileBtn href="#navbar" title="Show Navbar">
              Show Navbar
            </MobileBtn>
            <MobileBtn href="#home" title="Hide Navbar">
              Hide Navbar
            </MobileBtn>

            <NavList id="nav">
              <NavListItem className="current">
                <a href="#home" onClick={scrollTo}>
                  Home
                </a>
              </NavListItem>
              <NavListItem>
                <a href="#about" onClick={scrollTo}>
                  About
                </a>
              </NavListItem>
              <NavListItem>
                <a href="#resume" onClick={scrollTo}>
                  Resume
                </a>
              </NavListItem>
              <NavListItem>
                <a href="#portfolio" onClick={scrollTo}>
                  Portfolio
                </a>
              </NavListItem>
              <NavListItem>
                <a href="#testimonials" onClick={scrollTo}>
                  Testimonials
                </a>
              </NavListItem>
              <NavListItem>
                <a href="#contact" onClick={scrollTo}>
                  Contact
                </a>
              </NavListItem>
              {/* <NavListItem>
              <a href="https://ryan-johnson.blog">Blog</a>
            </NavListItem> */}
            </NavList>
          </Navbar>

          <Banner>
            <BannerText>
              <Heading>{name}</Heading>
              <SubHeading>
                I'm an{' '}
                <span>
                  {city}, {state}
                </span>{' '}
                based <span>{occupation}</span>. {description}
                <span>{degree}</span> from <span>{school}</span>.
              </SubHeading>
              <hr />
              <SocialList>{this.renderNetworks()}</SocialList>
            </BannerText>
          </Banner>

          <ScrolldownBtn>
            <a href="#about" onClick={this.props.scrollTo}>
              <FontAwesomeIcon icon="chevron-circle-down" />
            </a>
          </ScrolldownBtn>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 800px;
  min-height: 500px;
  background: #161415 url('/images/header-bg.jpg') no-repeat top center;
  background-size: cover;
  text-align: center;
  overflow: hidden;
  z-index: 1;

  &.overlay {
    position: relative;
  }

  &.overlay:after {
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
  /* margin: 0 auto; */
  /* text-align: center; */
`;

const BannerText = styled.div`
  width: 100%;

  hr {
    width: 60%;
    margin: 18px auto 24px auto;
    /* border-color: #2f2d2e; */
    border-color: rgba(150, 150, 150, 0.15);
  }
`;

const Heading = styled.h1`
  font: 90px/1.1em 'Open Sans', sans-serif;
  font-weight: 700;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
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
  /* padding: 0; */

  a {
    color: #fff;
  }
  a:hover {
    color: #11abb0;
  }
`;

/* Scrolldown button */
const ScrolldownBtn = styled.p`
  a {
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -29px;
    color: #fff;
    display: block;
    height: 42px;
    width: 42px;
    font-size: 42px;
    line-height: 42px;
    /* border-radius: 100%; */

    transition: all 0.3s ease-in-out;
  }
  a:hover {
    color: #11abb0;
  }
`;

const MobileBtn = styled.a``;

const Navbar = styled.nav`
  /* margin: 0 auto; */
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

  ul {
    margin: 0;
    padding: 0;
    /* border: none;
    outline: none; */
  }

  /* Hide toggle buttons */
  ${MobileBtn} {
    display: none;
  }

  &.opaque {
    background-color: #333;
  }
`;

const NavList = styled.ul`
  /* min-height: 48px; */
  /* width: auto; */

  /* Center align menu */
  text-align: center;
`;

const NavListItem = styled.li`
  /* position: relative; */
  list-style: none;
  display: inline-block;
  height: 48px;

  /* 8px padding top + 8px padding bottom + 32px line-height = 48px */
  a {
    display: inline-block;
    padding: 8px 12px;
    line-height: 32px;
    text-decoration: none;
    /* text-align: left; */
    color: #fff;

    transition: color 0.2s ease-in-out;
  }
  a:active {
    background-color: transparent;
  }

  &.current {
    a {
      color: #f06000;
    }
  }
`;
