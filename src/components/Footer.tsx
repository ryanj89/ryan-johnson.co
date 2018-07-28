import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { PersonalInfo } from '../../types';
import Row from './Row';
import Column from './Column';

interface Props {
  data: PersonalInfo;
}

class Footer extends React.Component<Props> {
  readonly renderSocialList = () =>
    this.props.data.socialNetworks.map(network => (
      <SocialLinkItem key={network.name}>
        <Link href={network.url}>
          <FontAwesomeIcon icon={['fab', network.icon as IconName]} />
        </Link>
      </SocialLinkItem>
    ));

  render(): React.ReactNode {
    return (
      <FooterSection>
        <Row>
          <Column width={12}>
            <SocialLinks>{this.renderSocialList()}</SocialLinks>

            <CopyrightList>
              <CopyrightItem>
                &copy; Copyright 2018{' '}
                <Link title="Ryan Johnson" href="http://www.ryan-johnson.co/">
                  Ryan Johnson
                </Link>
              </CopyrightItem>
              <CopyrightItem>
                Inspired by{' '}
                <Link title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </Link>
              </CopyrightItem>
            </CopyrightList>
          </Column>

          {/* TODO: */}
          <div id="go-top">
            <Link className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </Link>
          </div>
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
  /* margin-bottom: 48px; */
  color: #303030;
  font-size: 14px;
  text-align: center;
  position: relative;
`;

const Link = styled.a`
  &,
  &:visited {
    color: #525252;
  }

  &:hover,
  &:focus {
    color: #fff;
  }
`;

const SocialLinks = styled.ul`
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
