import { ChangeEvent, useEffect, useState } from 'react';

import Select from 'react-select';

import Input from '../../components/Input';

import { Container, Content, FooterContainer, Form, Tille } from './styles';

import Button from '../../components/Button';

import { useFormContext } from '../../context/Form';
import { DefineFieldProps } from '../../hooks/useValidation';
import TextArea from '../../components/TextArea';
import FileInput from '../../components/FileInput';
import { getAllCategory, registerVideo } from '../../server';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  title: string;
  description: string;
  url: string;
  catgegories: string;
  thumbnail: string;
}

function Video() {
  const [categories, setCategories] = useState([]);
  const [selectedcategories, setSelectedCategories] = useState([]);
  const { state, dispatch, validation } = useFormContext();
  const navigate = useNavigate();

  const handleChange = (
    name: keyof FormValues,
    value:
      | string
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: 'SET_VALUE', payload: { field: name, value } });
  };

  const handleSubmit = () => {
    registerVideo({
      title: state.title,
      description: state.description,
      url: state.url,
      categories: selectedcategories.map(
        (category: { value: string }) => category.value
      ),
      image_id: state.thumbnail,
    })
      .then(() => {
        dispatch({
          type: 'SET_INITIAL_VALUES',
          payload: {
            field: 'email',
            value: '',
          },
        });
        alert('Video adicionado com sucesso');
        navigate('/');
      })
      .catch(() => {
        alert('Erro ao adicionar video, tente novamente');
      });
  };

  const isValid = Object.values(validation).every((message) => !message);

  const validFields: DefineFieldProps = {
    title: true,
    description: true,
    url: true,
    catgegories: false,
    thumbnail: false,
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: '60px',
      minHeight: '60px',
      borderRadius: '15px',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: '60px',
      padding: '0 6px',
    }),
    input: (provided: any) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      height: '60px',
    }),
  };

  const getCategories = async () => {
    const data: any = await getAllCategory();

    setCategories(
      data.data.data.categories.map((category: { title: any }) => ({
        value: category.title,
        label: category.title,
      }))
    );
  };

  const handleUploadReturn = (data: any) => {
    handleChange('thumbnail', data.id);
  };

  const handleSelectCategories = (data: any) => {
    setSelectedCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <Tille className='poppins-semibold'>Adicionar video</Tille>
      <Content>
        <Form>
          <Input
            label='Título'
            type='text'
            name='title'
            placeholder=''
            validationRules={{ required: true }}
            value={state.title}
            onChange={(event) => handleChange('title', event)}
            validFields={validFields}
          />
          <TextArea
            label='Descrição'
            type='textarea'
            name='description'
            placeholder=''
            validationRules={{ required: true }}
            value={state.description}
            onChange={(event) => handleChange('description', event)}
            validFields={validFields}
            height={140}
          />
          <Input
            label='Url'
            type='text'
            name='url'
            placeholder=''
            validationRules={{ required: true }}
            value={state.url}
            onChange={(event) => handleChange('url', event)}
            validFields={validFields}
          />

          <Select
            options={categories}
            isMulti
            closeMenuOnSelect={false}
            styles={customStyles}
            placeholder='Selecione a(s) categoria(s)'
            onChange={handleSelectCategories}
          />
          <FooterContainer>
            <FileInput handleUploadReturn={handleUploadReturn} />

            <Button
              onClick={handleSubmit}
              disabled={!isValid}
              style={{ width: '200px', height: '50px' }}
            >
              Salvar
            </Button>
          </FooterContainer>
        </Form>
      </Content>
    </Container>
  );
}

export default Video;
