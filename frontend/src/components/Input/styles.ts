import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 16px 60px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};

  &:focus {
    border-color: ${(props) => props.theme.colors.black};
    outline: none;
  }
`;

export const IconLeft = styled.span`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.gray};
`;

export const IconRight = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
`;

export const ErrorText = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  margin-top: 4px;
`;
