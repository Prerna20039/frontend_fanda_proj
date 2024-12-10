import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    padding: '20px',
    maxHeight: '80vh', // Limit the modal height to 80% of the viewport height
    overflowY: 'auto', // Allow vertical scrolling if needed
  },
};

const EditPlacementBonusBalanceModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [existingBalance, setExistingBalance] = useState('');
  const [newBalance, setNewBalance] = useState('');

  const handleSave = () => {
    if (!username || !existingBalance || !newBalance) {
      alert('Please fill in all fields!');
      return;
    }

    alert('Placement bonus balance updated successfully!');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
      <h2 className="text-xl font-bold mb-4 text-txtcolor">Edit Placement Bonus Balance</h2>
      <div className="space-y-4">
        {/* Username field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={username}
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Existing Balance field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Existing Balance</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded p-2"
            value={existingBalance}
            placeholder="Enter Existing Balance"
            onChange={(e) => setExistingBalance(e.target.value)}
          />
        </div>

        {/* New Balance field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">New Balance</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded p-2"
            value={newBalance}
            placeholder="Enter New Balance"
            onChange={(e) => setNewBalance(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onRequestClose}
          className="bg-none border border-basecolor px-4 py-2 rounded text-basecolor"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-basecolor text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  );
};

export default EditPlacementBonusBalanceModal;
