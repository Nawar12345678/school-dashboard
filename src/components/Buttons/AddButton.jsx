import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AddButton.css';
import ModalEvent from '../Modals/ModalEvent';
import ModalNews from '../Modals/ModalNews';

const AddEventButton = ({ btnName , target}) => {
  return (
    <div>
      <Button className="btnAdd" data-bs-toggle="modal" data-bs-target={target}>
        <i className="fas fa-plus pe-2"></i>
        Add {btnName}
      </Button>
      {/* modal add event */}
      <ModalEvent/>
      {/* modal add news */}
      <ModalNews/>
    </div>
  );
};

export default AddEventButton;
