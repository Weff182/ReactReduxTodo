import styled, { css } from 'styled-components';

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--white);
  margin-bottom: 1.5rem;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TodoItemDetalis = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TextItem = styled.p`
  word-break: break-all;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--black-2);

  ${(props) => props.status === 'complete'
    && css`
      text-decoration: line-through;
      opacity: 0.7;
    `}
`;

export const Time = styled.p`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: -0.2rem;
  color: var(--black-2);
`;

export const TodoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: var(--gray-1);
  color: var(--black-2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease background-color;
  &:hover {
    background-color: var(--gray-2);
  }
`;
