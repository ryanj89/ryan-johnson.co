import styled from 'styled-components';

const Row = styled.div`
  width: 96%;
  max-width: 1020px;
  margin: 0 auto;

  & & {
    width: auto;
    max-width: none;
    margin: 0 -20px;
  }

  /* Row clearing */
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }

  /* mobile wide/small tablets */
  @media only screen and (max-width: 767px) {
    width: 460px;
    margin: 0 auto;
    padding: 0;

    & & {
      width: auto;
      max-width: none;
      margin: 0 -30px;
    }
  }

  /* narrow mobile devices */
  @media only screen and (max-width: 460px) {
    width: auto;
  }

  /* TODO: larger screens */
  /* @media only screen and (max-width: 460px) {
    width: auto;
  } */
`;

export default Row;
