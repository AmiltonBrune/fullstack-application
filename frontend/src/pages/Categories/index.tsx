import { useEffect, useState } from 'react';
import CreateItem from './CreateItem';

import { Container } from './styles';

import { cellsHeaders, rowsKeys } from './constants';
import SimpleTable from '../../components/SimpleTable';
import Button from '../../components/Button';
import { useModal } from '../../hooks/modal';
import { Tille } from '../Videos/styles';
import { getAllCategory } from '../../server';

function Categories() {
  const [categories, setCategories] = useState([]);
  const { toggle } = useModal();

  const getCategories = async () => {
    const data: any = await getAllCategory();

    setCategories(
      data.data.data.categories.map((category: { title: any }) => ({
        name: category.title,
      }))
    );
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <Tille className='poppins-semibold'>Categorias</Tille>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          style={{
            width: '200px',
            height: '50px',
          }}
          onClick={toggle}
        >
          Criar categoria
        </Button>
      </div>
      {categories && (
        <SimpleTable
          title=''
          rows={categories}
          rowsKeys={rowsKeys}
          cellsHeaders={cellsHeaders}
        />
      )}

      <CreateItem />
    </Container>
  );
}

export default Categories;
