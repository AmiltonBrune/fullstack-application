import { ChangeEvent } from 'react';
import { Container, ButtonContainer, Content, InputContainer } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { FormValues, useFormContext } from '../../../context/Form';
import { useModal } from '../../../hooks/modal';
import Modal from '../../../components/Modal';
import { registerCategory } from '../../../server';

function CreateCategory() {
  const { state, dispatch } = useFormContext();
  const { isShowing, toggle } = useModal();

  const handleChange = (
    name: keyof FormValues,
    value: string | ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: 'SET_VALUE', payload: { field: name, value } });
  };

  const handleSubmit = async () => {
    registerCategory({
      title: state.name,
    })
      .then(() => {
        dispatch({
          type: 'SET_INITIAL_VALUES',
          payload: {
            field: 'email',
            value: '',
          },
        });
        toggle();
        alert('Categoria criada com sucesso');
      })
      .catch(() => {
        toggle();
        alert('Erro ao criar categoria');
      });
  };

  return (
    <Container>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        title='Cadastrar categoria'
        isCloseButton={true}
        height={'350px'}
        footer={
          <>
            <Button onClick={toggle}>sair</Button>
            <Button onClick={handleSubmit}>cadastrar</Button>
          </>
        }
      >
        <Content>
          <InputContainer>
            <ButtonContainer>
              <Input
                label='Nome'
                type='text'
                name='name'
                placeholder=''
                value={state.name}
                validationRules={{ required: true }}
                onChange={(event) => handleChange('name', event)}
              />
            </ButtonContainer>
          </InputContainer>
        </Content>
      </Modal>
    </Container>
  );
}

export default CreateCategory;
