import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CSSProperties } from 'react';
import Slider, { Settings } from 'react-slick';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';

import { Card, Container, Image, Title } from './styles';
import { useModal } from '../../hooks/modal';

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

interface SimpleSliderProps {
  cards: {
    title: string;
    image: string;
  }[];
  onCardSelect: (data: any) => void;
}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <MdArrowCircleRight
      className={className}
      style={{ ...style, display: 'block', color: 'black', fontSize: '2rem' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <MdArrowCircleLeft
      className={className}
      style={{ ...style, display: 'block', color: 'black', fontSize: '2rem' }}
      onClick={onClick}
    />
  );
};

const SimpleSlider = ({ cards, onCardSelect }: SimpleSliderProps) => {
  const { toggle } = useModal();
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (data: any) => {
    onCardSelect(data);
    toggle();
  };

  return (
    <Container>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} onClick={() => handleClick(card)}>
            <Image src={card.image} />
            <Title className='poppins-semibold'>{card.title}</Title>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default SimpleSlider;
export type { SimpleSliderProps };
