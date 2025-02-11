import { useState, useContext } from "react";

import Modal from "../Modal";

function NewCharacterModal({ show, onClose }) {
  return (
    <Modal>
      <div>
        <h1>New Character!</h1>
      </div>
    </Modal>
  );
}

export default NewCharacterModal;
