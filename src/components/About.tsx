import * as React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PersonalInfo } from '../../types';
import Row from './Row';
import Column from './Column';
import Button from './Button';
import Waypoint from 'react-waypoint';

interface AboutProps {
  setRef: (ref: HTMLElement) => void;
  handleEnter: (name: string) => void;
  data: PersonalInfo;
}

class About extends React.Component<AboutProps> {
  render(): React.ReactNode {
    const {
      name,
      profilePic,
      bio,
      address: { city, state, zip },
      phone,
      email,
      resumeDownloadUrl,
    } = this.props.data;
    // TODO: SETUP GOOGLE VOICE NUMBER
    const profileImg = `images/${profilePic}`;
    const emailLink = `mailto:${email}`;

    return (
      <Waypoint bottomOffset="90%" onEnter={() => this.props.handleEnter('about')}>
        <div>
          <AboutWrapper id="about" innerRef={this.props.setRef}>
            <Row>
              <Column width={3}>
                <Fade>
                  <ProfilePic src={profileImg} alt="Ryan Johnson Profile Picture" />
                </Fade>
              </Column>
              <Column width={9} style={{ paddingRight: '5%' }}>
                <Fade right cascade duration={2000}>
                  <HeadingText>About Me</HeadingText>

                  <Text>{bio}</Text>
                  <Row>
                    <Column width={5}>
                      <HeadingText>Contact Details</HeadingText>
                      <Text>
                        <span>{name}</span>
                        <br />
                        <span>
                          {city}, {state} {zip}
                        </span>
                        <br />
                        <span>{phone}</span>
                        <br />
                        <span>
                          <a href={emailLink}>{email}</a>
                        </span>
                      </Text>
                    </Column>
                    <Column width={7} style={{ paddingTop: '6px' }}>
                      <Text>
                        <DownloadButton href={resumeDownloadUrl} target="_blank">
                          <FontAwesomeIcon
                            icon="download"
                            style={{ marginRight: '15px', fontSize: '20px' }}
                          />Download Resume
                        </DownloadButton>
                      </Text>
                    </Column>
                  </Row>
                </Fade>
              </Column>
            </Row>
          </AboutWrapper>
        </div>
      </Waypoint>
    );
  }
}

export default About;

// FIXME:
// tslint:disable-next-line:no-any
const DownloadButton: any = Button.withComponent('a');

const AboutWrapper = styled.section`
  background: #2b2b2b;
  padding-top: 96px;
  padding-bottom: 66px;
  overflow: hidden;

  a,
  a:visited {
    color: #fff;
  }
  a:hover,
  a:focus {
    color: #11abb0;
  }

  ${DownloadButton} {
    margin-top: 6px;
    background: #444;

    &:hover {
      background: #fff;
      color: #2b2b2b;
    }
  }
`;

const HeadingText = styled.h2`
  font: 22px/30px 'Open Sans', sans-serif;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
`;

const Text = styled.p`
  line-height: 30px;
  color: #7a7a7a;
`;

const ProfilePic = styled.img`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
