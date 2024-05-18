import { useState, useRef, MouseEvent } from 'react';
import {
  CategoryButton,
  CategoryListContainer,
  CategoryTitle,
  Container,
} from './styles';

interface CategoryListProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryList = ({ categories, onCategorySelect }: CategoryListProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      const updatedCategories = selectedCategories.filter(
        (cat) => cat !== category
      );
      setSelectedCategories(updatedCategories);
      onCategorySelect(category);
    } else {
      const updatedCategories = [...selectedCategories, category];
      setSelectedCategories(updatedCategories);
      onCategorySelect(category);
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartY(e.clientY - containerRef.current.offsetTop);
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const y = e.clientY - containerRef.current.offsetTop;
    const walk = (y - startY) * 2;
    containerRef.current.scrollTop = scrollTop - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <Container>
      <CategoryTitle className='poppins-regular'>Categorias</CategoryTitle>
      <CategoryListContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {categories.map((category) => (
          <CategoryButton
            className='poppins-light'
            key={category}
            selected={selectedCategories.includes(category)}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryListContainer>
    </Container>
  );
};

export default CategoryList;
export type { CategoryListProps };
