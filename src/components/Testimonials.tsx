import * as React from 'react';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Row from './Row';
import Column from './Column';
import { TestimonialInfo } from '../../types';

interface Props {
  handleEnter: (name: string) => void;
  setRef: (ref: HTMLElement) => void;
  data: TestimonialInfo[];
}
class Testimonials extends React.Component<Props> {
  readonly renderTestimonials = () =>
    this.props.data.map(({ user, text }) => (
      <Quote key={user}>
        <QuoteText>{text}</QuoteText>
        <QuoteAuthor>{user}</QuoteAuthor>
      </Quote>
    ));

  render(): React.ReactNode {
    return (
      <Waypoint bottomOffset="90%" onEnter={() => this.props.handleEnter('testimonials')}>
        <div>
          <TestimonialSection id="testimonials" className="overlay" innerRef={this.props.setRef}>
            <TextContainer>
              <Row>
                <HeaderColumn width={2}>
                  <Heading>
                    <FontAwesomeIcon icon="quote-left" size="2x" />
                  </Heading>
                </HeaderColumn>
                <Column width={10} style={{ zoom: 1, position: 'relative' }}>
                  <Slides>{this.renderTestimonials()}</Slides>
                </Column>
              </Row>
            </TextContainer>
          </TestimonialSection>
        </div>
      </Waypoint>
    );
  }
}

export default Testimonials;

const TestimonialSection = styled.section`
  background: #1f1f1f url('/images/testimonial-bg.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;

  position: relative;
  min-height: 200px;
  width: 100%;
  overflow: hidden;

  &.overlay {
    z-index: 0;
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
    background: rgba(0, 0, 0, 1);
    opacity: 0.5;
  }
`;

const TextContainer = styled.div`
  z-index: 1;
  padding-top: 96px;
  padding-bottom: 66px;
`;

const Heading = styled.h1`
  color: #fff;
`;

const HeaderColumn = styled(Column)`
  padding-top: 9px;
`;

const Slides = styled.ul`
  zoom: 1;
  margin: 0;
  padding: 0;
  list-style: none;

  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }

  & > li {
    overflow: hidden;
  }
`;

const Quote = styled.blockquote`
  margin: 0 0 30px 0;
  padding-left: 0;
  position: relative;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 1);

  &:before {
    content: none;
  }
`;

const QuoteText = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  padding: 0;
  font-size: 24px;
  line-height: 48px;
  color: #fff;
`;

const QuoteAuthor = styled.cite`
  display: block;
  font-size: 16px;
  font-style: normal;
  line-height: 18px;
  color: #fff;
`;
