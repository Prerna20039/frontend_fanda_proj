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

const AddNewMemberModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [directSponsor, setDirectSponsor] = useState('');
  const [placementUser, setPlacementUser] = useState('');

  const handleSave = () => {
    if (!username || !password || !directSponsor || !placementUser) {
      alert('Please fill in all fields!');
      return;
    }

    alert('New member added successfully!');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
      <h2 className="text-xl font-bold mb-4 text-txtcolor">Add New Member</h2>
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

        {/* Password field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full border border-gray-300 rounded p-2"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`}
              style={{ fontSize: '20px', color: '#DB17B9' }}
            ></i>
          </div>
        </div>

        {/* Direct Sponsor Username field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Direct Sponsor Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={directSponsor}
            placeholder="Enter Direct Sponsor Username"
            onChange={(e) => setDirectSponsor(e.target.value)}
          />
        </div>

        {/* Placement Username field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Placement Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={placementUser}
            placeholder="Enter Placement Username"
            onChange={(e) => setPlacementUser(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onRequestClose}
          className="bg-none border border-basecolor px-4 py-2 rounded text-basecolor"
        >
          Discard
        </button>
        <button
          onClick={handleSave}
          className="bg-basecolor text-white px-4 py-2 rounded"
        >
            Save changes
        </button>
      </div>
    </Modal>
  );
};

export default AddNewMemberModal;
