import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Chapter({name, datainside}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p color="danger" onClick={toggle}>
        {name}
      </p>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          {datainside}
        </ModalBody>
       
      </Modal>
    </div>
  );
}
