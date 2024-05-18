import { useRef, useState } from 'react';
import { GoScreenFull, GoPlay } from 'react-icons/go';
import { IoPauseOutline } from 'react-icons/io5';

import ReactPlayer from 'react-player';

import {
  CardContainer,
  ContentContainer,
  ControlButton,
  ControlsContainer,
  ImageContainer,
  MovieDescription,
  MovieImage,
  MovieTitle,
  PlayIcon,
  PlayerContainer,
  StyledReactPlayer,
  TagButton,
  TagsContainer,
} from './styles';
import useWindowSize from '../../hooks/useWindowSize';

const MovieCard = ({ selectCard }: any) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer>(null);
  const { width } = useWindowSize();

  const handleFullscreen = () => {
    if (playerRef.current) {
      const playerElement =
        playerRef.current.getInternalPlayer() as HTMLElement;
      if (playerElement.requestFullscreen) {
        playerElement.requestFullscreen();
      } else if ((playerElement as any).mozRequestFullScreen) {
        (playerElement as any).mozRequestFullScreen();
      } else if ((playerElement as any).webkitRequestFullscreen) {
        (playerElement as any).webkitRequestFullscreen();
      } else if ((playerElement as any).msRequestFullscreen) {
        (playerElement as any).msRequestFullscreen();
      }
    }
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <CardContainer>
      {isPlay && selectCard.url && selectCard.url.length > 0 ? (
        <PlayerContainer>
          <StyledReactPlayer
            ref={playerRef}
            url={selectCard.url}
            playing={playing}
            controls={false}
            width={width <= 768 ? '100%' : '640px'}
            height={width <= 768 ? '150px' : '360px'}
          />
          <ControlsContainer>
            <ControlButton onClick={handlePlayPause}>
              {playing ? <IoPauseOutline size={40} /> : <GoPlay size={40} />}
            </ControlButton>
            <ControlButton onClick={handleFullscreen}>
              <GoScreenFull size={40} />
            </ControlButton>
          </ControlsContainer>
        </PlayerContainer>
      ) : (
        <>
          {selectCard.title && selectCard.title.length > 0 && (
            <>
              <ImageContainer>
                <MovieImage src={selectCard.image} alt='Movie Poster' />
                <PlayIcon onClick={handlePlay} />
              </ImageContainer>
              <ContentContainer>
                <MovieTitle>{selectCard.title}</MovieTitle>
                <MovieDescription>{selectCard.description}</MovieDescription>
                <TagsContainer>
                  {selectCard.categories.map(
                    (category: string, index: number) => (
                      <TagButton key={index}>{category}</TagButton>
                    )
                  )}
                </TagsContainer>
              </ContentContainer>
            </>
          )}
        </>
      )}
    </CardContainer>
  );
};

export default MovieCard;
