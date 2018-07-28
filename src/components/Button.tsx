import styled from 'styled-components';

const Button = styled.button`
  &,
  &:visited {
    font: 16px/30px 'Open Sans', sans-serif;
    font-weight: 700;
    background: #11abb0;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 0;
    color: #fff;
    padding: 12px 20px;
    margin-bottom: 18px;
    border: none;
    cursor: pointer;
    height: auto;

    transition: all 0.2s ease-in-out;

    border-radius: 3px;
  }
`;

export default Button;
