import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  gap: 10px;

  > svg {
    cursor: pointer;

    transition: opacity 0.3s linear;

    &:hover {
      opacity: 0.7;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;
