import * as React from 'react';
import { scroller } from 'react-scroll';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import Row from './Row';
import Column from './Column';

interface Props {
  socialNetworks: Array<{ name: string; url: string; icon: string }>;
}

class Footer extends React.Component<Props> {
  scrollToTop = () => {
    scroller.scrollTo('home', { smooth: true });
  };

  readonly renderSocialList = () =>
    this.props.socialNetworks.map(({ name, url, icon }) => (
      <SocialLinkItem key={name}>
        <SocialLink href={url}>
          <FontAwesomeIcon icon={['fab', icon as IconName]} />
        </SocialLink>
      </SocialLinkItem>
    ));

  render(): React.ReactNode {
    return (
      <FooterSection>
        <Row>
          <GoToTopBtn title="Back to Top" onClick={this.scrollToTop}>
            <FontAwesomeIcon icon="chevron-circle-up" size="3x" />
          </GoToTopBtn>

          <Column width={12}>
            <SocialLinkList>{this.renderSocialList()}</SocialLinkList>

            <CopyrightList>
              <CopyrightItem>
                &copy; Copyright 2018{' '}
                <SocialLink title="Ryan Johnson" href="http://www.ryan-johnson.co/">
                  Ryan Johnson
                </SocialLink>
              </CopyrightItem>
              <CopyrightItem>
                Inspired by{' '}
                <SocialLink title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </SocialLink>
              </CopyrightItem>
            </CopyrightList>
          </Column>
        </Row>
      </FooterSection>
    );
  }
}

export default Footer;

const FooterSection = styled.footer`
  background: #0f0f0f;
  padding-top: 48px;
  padding-bottom: 48px;
  color: #303030;
  font-size: 14px;
  text-align: center;
  position: relative;
`;

const SocialLink = styled.a`
  transition: all 0.2s ease-in-out;
  &,
  &:visited {
    color: #525252;
  }

  &:hover,
  &:focus {
    color: #11abb0;
  }
`;

const SocialLinkList = styled.ul`
  margin: 18px 0 30px 0;
  padding: 0;
  font-size: 30px;
`;

const SocialLinkItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-left: 42px;
  color: #f06000;

  &:first-child {
    margin-left: 0;
  }
`;

const CopyrightList = styled.ul`
  margin: 0;
  padding: 0;
`;

const CopyrightItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  line-height: 24px;

  &:before {
    content: '\u2022';
    padding-left: 10px;
    padding-right: 10px;
    color: #095153;
  }

  &:first-child:before {
    display: none;
  }
`;

const GoToTopBtn = styled(SocialLink)`
  position: absolute;
  top: -30px;
  left: 50%;
  margin-left: -30px;
  font-size: 21px;
  line-height: 60px;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 2px;
    left: 2px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: #fff;
  }
`;
