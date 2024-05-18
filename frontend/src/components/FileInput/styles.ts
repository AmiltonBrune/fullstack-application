import styled from 'styled-components';
import { LiaCloudUploadAltSolid } from 'react-icons/lia';

export const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadIcon = styled(LiaCloudUploadAltSolid)`
  font-size: 2em;
  color: ${(props) => props.theme.colors.gray};
`;

export const Label = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

export const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  object-fit: cover;
`;
