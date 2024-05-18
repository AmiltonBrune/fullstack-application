import { useEffect, useState } from 'react';

import CategoryList from '../../components/CategoryList';

import { CategoryContainer, Container, ContainerImage, Image } from './styles';

import home_image from '../../assets/images/svgs/home_image.svg';
import mock_image from '../../assets/images/mock_image.jpg';

import Carousel from '../../components/Carousel';
import { useModal } from '../../hooks/modal';
import Modal from '../../components/Modal';

import MovieCard from '../../components/MovieCard';
import { getAllCategory, getAllVideos } from '../../server';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState<any>([]);
  const [selectCard, setSelectCard] = useState<any>({});
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { isShowing, toggle } = useModal();

  const getCategories = async () => {
    const data: any = await getAllCategory();

    setCategories(
      data.data.data.categories.map(
        (category: { title: any }) => category.title
      )
    );
  };

  const getVideos = async () => {
    const data: any = await getAllVideos();

    const fetchedVideos = data.data.data.videos.map(
      (video: {
        title: string;
        description: string;
        url: string;
        image_id: string;
        categories: string[];
      }) => ({
        image: video.image_id
          ? `http://localhost:8000/images/${video.image_id}`
          : mock_image,
        title: video.title,
        description: video.description,
        url: video.url,
        categories: video.categories,
      })
    );

    setVideos(fetchedVideos);
    setFilteredVideos(fetchedVideos);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const handleSelectCard = (data: any) => {
    setSelectCard(data);
  };

  useEffect(() => {
    getCategories();
    getVideos();
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(
        videos.filter((video: any) =>
          selectedCategories.every((category) =>
            video.categories.includes(category)
          )
        )
      );
    }
  }, [selectedCategories, videos]);

  return (
    <>
      <Container>
        <ContainerImage>
          <Image src={home_image} />
        </ContainerImage>
        <CategoryContainer>
          <CategoryList
            categories={categories}
            onCategorySelect={handleCategorySelect}
          />
        </CategoryContainer>
      </Container>
      <Carousel
        cards={filteredVideos}
        onCardSelect={handleSelectCard}
      ></Carousel>

      <Modal title='' isShowing={isShowing} hide={toggle} isCloseButton={true}>
        <MovieCard selectCard={selectCard} />
      </Modal>
    </>
  );
};

export default Dashboard;
