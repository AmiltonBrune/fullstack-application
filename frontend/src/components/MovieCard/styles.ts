import styled from 'styled-components';
import { FaPlayCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin: 20px auto;

  @media (max-width: 768px) {
    gap: 30px;
    align-items: center;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  flex-shrink: 0;
`;

export const MovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const PlayIcon = styled(FaPlayCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.primary};
  font-size: 50px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MovieDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
  line-height: 1.5;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 12px;

    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export const TagsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const TagButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 20px;
  background-color: #fff;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    > iframe {
      width: 50%;
      height: auto;
    }
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: 640px;
  height: 360px;
  @media (max-width: 768px) {
    width: 200px;
    height: auto;
    aspect-ratio: 16/9;
  }
`;