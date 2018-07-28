import * as React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PortfolioInfo } from '../../types';
import Row from './Row';
import Column from './Column';

interface Props {
  data: PortfolioInfo;
}

class Portfolio extends React.Component<Props> {
  readonly renderProjects = () =>
    this.props.data.projects.map(project => (
      <PortfolioItem width={3} key={project.title}>
        <ItemWrapper>
          <ItemLink href={project.url} title={project.title}>
            <ItemImage src={`images/portfolio/${project.image}`} alt={project.title} />
            <Overlay>
              <PortfolioItemMeta>
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </PortfolioItemMeta>
            </Overlay>
            <LinkIcon>
              <FontAwesomeIcon icon="link" />
            </LinkIcon>
          </ItemLink>
        </ItemWrapper>
      </PortfolioItem>
    ));

  render(): React.ReactNode {
    return (
      <PortfolioSection name="portfolio">
        <Row>
          <Column width={12} collapsed>
            <Heading>Check out some of my work</Heading>
            <div id="portfolio-wrapper" className="cf">
              {this.renderProjects()}
            </div>
          </Column>
        </Row>
      </PortfolioSection>
    );
  }
}

export default Portfolio;

const PortfolioSection = styled(Element)`
  background: #ebeeee;
  padding-top: 90px;
  padding-bottom: 60px;
`;

const Heading = styled.h1`
  font: 15px/24px 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 48px;
  color: #95a3a3;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  filter: alpha(opacity=0);

  transition: opacity 0.3s ease-in-out;

  background: url('/images/overlay-bg.png') repeat;
`;

const LinkIcon = styled.div`
  display: block;
  color: #fff;
  width: 30px;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  text-align: center;

  opacity: 0;
  filter: alpha(opacity=0);

  transition: opacity 0.3s ease-in-out;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
`;

const PortfolioItem = styled(Column)`
  margin-bottom: 36px;

  &:hover ${Overlay}, &:hover ${LinkIcon} {
    opacity: 1;
    filter: alpha(opacity=100);
  }
`;

const ItemWrapper = styled.div`
  background: #fff;
  overflow: hidden;
  position: relative;

  transition: all 0.3s ease-in-out;
`;

const ItemLink = styled.a`
  display: block;
  cursor: pointer;
`;

const ItemImage = styled.img`
  vertical-align: bottom;
`;

const PortfolioItemMeta = styled.div`
  padding: 18px;

  & h5 {
    font: 14px/21px 'Open Sans', sans-serif;
    font-weight: bold;
    color: #fff;
  }

  & p {
    font: 12px/18px 'Open Sans', sans-serif;
    font-weight: 300;
    color: #c6c7c7;
    margin-bottom: 0;
  }
`;
