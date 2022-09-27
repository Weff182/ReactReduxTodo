import styled, { css } from 'styled-components';

export const ButtonType = styled.button`
  display: inline-block;
  height: auto;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  overflow: hidden;

  ${(props) => props.variant === 'primary'
    && css`
      background-color: var(--primaryPurple);
      color: var(--white);
    `}

  ${(props) => props.variant === 'secondary'
    && css`
      background-color: var(--bg-3);
      color: var(--black-1);
    `}
`;

export const SelecButtonType = styled.select`
  display: inline-block;
  height: auto;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  overflow: hidden;
  color: var(--black-2);
  font-family: Poppins;
  padding: 1rem;
  border: none;
  background-color: var(--bg-3);

  width: 150px;
  cursor: pointer;
`;
