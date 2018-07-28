import * as React from 'react';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';

import { ResumeInfo } from '../../types';
import Column from './Column';
import Row from './Row';

interface Props {
  setRef: (ref: HTMLElement) => void;
  handleEnter: (name: string) => void;
  data: ResumeInfo;
}
class Resume extends React.Component<Props> {
  readonly renderEducation = () =>
    this.props.data.education.map(edu => (
      <React.Fragment key={edu.school}>
        <SubHeading>{edu.school}</SubHeading>
        <Info>
          {edu.degree}
          <span>&bull;</span>
          <Date>{edu.graduated}</Date>
        </Info>
        <p>{edu.description}</p>
      </React.Fragment>
    ));

  readonly renderWork = () =>
    this.props.data.work.map(work => (
      <React.Fragment key={work.company}>
        <SubHeading>{work.company}</SubHeading>
        <Info>
          {work.title}
          <span>&bull;</span> <Date>{work.years}</Date>
        </Info>
        <p style={{ whiteSpace: 'pre-wrap' }}>{work.description}</p>
      </React.Fragment>
    ));

  readonly renderSkillsList = () =>
    this.props.data.skills.map(({ name, description, icon }) => {
      return (
        <SkillItem width={3} key={name}>
          <img style={{ maxWidth: '65%' }} src={`images/icons/${icon}`} alt={name} />
          <h5>{name}</h5>
          <p>{description}</p>
        </SkillItem>
      );
    });

  render(): React.ReactNode {
    const { skillsTagline } = this.props.data;
    return (
      <Waypoint bottomOffset="50%" onEnter={() => this.props.handleEnter('resume')}>
        <div>
          <ResumeSection id="resume" innerRef={this.props.setRef}>
            <Education>
              <HeaderColumn width={3}>
                <Heading>
                  <span>Education</span>
                </Heading>
              </HeaderColumn>

              <MainColumn width={9}>
                <Row>
                  <Column width={12}>{this.renderEducation()}</Column>
                </Row>
              </MainColumn>
            </Education>

            <Work>
              <HeaderColumn width={3}>
                <Heading>
                  <span>Work</span>
                </Heading>
              </HeaderColumn>
              <MainColumn width={9}>{this.renderWork()}</MainColumn>
            </Work>

            <Row>
              <HeaderColumn width={3}>
                <Heading>
                  <span>Skills</span>
                </Heading>
              </HeaderColumn>

              <div>
                <MainColumn width={9}>
                  <SubText>{skillsTagline}</SubText>
                </MainColumn>
                <ul className="cf">{this.renderSkillsList()}</ul>
              </div>
            </Row>
          </ResumeSection>
        </div>
      </Waypoint>
    );
  }
}

export default Resume;

const ResumeSection = styled.section`
  /* background: #fff; */
  padding-top: 90px;
  padding-bottom: 72px;
  /* overflow: hidden; */
`;

const Heading = styled.h1`
  font: 18px/24px 'Open Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  & span {
    border-bottom: 3px solid #11abb0;
    padding-bottom: 6px;
  }
`;

const HeaderColumn = styled(Column)`
  padding-top: 9px;
`;

const MainColumn = styled(Column)`
  padding-right: 10%;
`;

const SkillItem = styled(Column)`
  text-align: center;
  margin-top: 2.5em;
  padding-left: 2em;
  padding-right: 2em;
`;

const StyledRow = styled(Row)`
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e8e8e8;
`;

const Education = StyledRow;
const Work = StyledRow;

const SubHeading = styled.h3`
  font: 25px/30px 'Open Sans', sans-serif;
  font-weight: 700;
`;

const Info = styled.p`
  font: 16px/24px 'Libre Baskerville', serif;
  font-style: italic;
  color: #6e7881;
  margin-bottom: 18px;
  margin-top: 9px;

  & span {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const SubText = styled.p`
  font: 19px/36px 'Open Sans', sans-serif;
  font-weight: 300;
  margin-bottom: 18px;
  text-align: center;
`;

const Date = styled.em`
  font: 15px/24px 'Open Sans', sans-serif;
  margin-top: 6px;
`;
