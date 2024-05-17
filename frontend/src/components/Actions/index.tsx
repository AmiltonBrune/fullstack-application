// import Tooltip from 'components/Tooltip';
import { MdEdit, MdDelete } from 'react-icons/md';

// import { useModal, useItems } from 'hooks';

import { Container } from './styles';

function Actions() {
  // const { toggleEdit, toggleAlertWarning } = useModal();
  // const { setSelectedItem, setSelectedItemObject } = useItems();

  // const handleSelectedItem = () => {
  //   setSelectedItem(item.id);
  //   toggleAlertWarning();
  // };

  // const handleSelectItemObject = () => {
  //   setSelectedItemObject(item);
  //   toggleEdit();
  // };

  return (
    <Container>
      <MdEdit id='edit' color='#1271CA' size={25} />
      {/* <Tooltip id='edit' text='Editar item' position='bottom' /> */}

      <MdDelete id='delete' color='#EC3535' size={25} />
      {/* <Tooltip id='delete' text='Excluir item' position='bottom' /> */}
    </Container>
  );
}

export default Actions;
