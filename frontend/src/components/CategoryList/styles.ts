import styled from 'styled-components';

interface ICategoryButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;

export const CategoryButton = styled.button<ICategoryButtonProps>`
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : 'transparent'};
  color: ${(props) => (props.selected ? 'white' : props.theme.colors.gray)};

  border-radius: 15px;
  margin: 5px 0;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  width: 200px;
  height: 60px;

  transition: all 0.3s;

  font-weight: ${(props) => (props.selected ? 700 : 300)};

  &:hover {
    background-color: ${(props) =>
      props.selected ? props.theme.colors.primary : 'none'};
    color: ${(props) => (props.selected ? 'white' : props.theme.colors.black)};
  }
`;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;

  max-height: 200px;
  overflow-y: scroll;
  overflow-x: none;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > button {
    flex-shrink: 0;
  }
`;

export const CategoryTitle = styled.span`
  color: ${(props) => props.theme.colors.black};
  text-transform: uppercase;
  font-size: 18px;
`;
