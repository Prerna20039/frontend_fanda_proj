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
    maxHeight: '53vh', // Limit the modal height to 80% of the viewport height
    overflowY: 'auto', // Allow vertical scrolling
  },
};

const EditUserProfileModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [bank, setBank] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [paynowName, setPaynowName] = useState('');
  const [paynowNumber, setPaynowNumber] = useState('');
  const [nric, setNric] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [directSponsor, setDirectSponsor] = useState('');
  const [placementuser, setPlacementuser] = useState('');

  const handleSave = () => {
    if (!username || !email || !contact || !bank || !bankAccount || !paynowName || !paynowNumber || !nric || !password || !directSponsor || !placementuser) {
      alert('Please fill in all fields!');
      return;
    }

    alert('Profile updated successfully!');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
      <h2 className="text-xl font-bold mb-4 text-txtcolor">Edit User Profile</h2>
      <div className="space-y-4">
        {/* Username field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={username}
            placeholder='Enter Username'
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
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`}
              style={{ fontSize: '20px', color: '#DB17B9' }}
            ></i>
          </div>
        </div>

        {/* Direct Sponsor field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Direct Sponsor Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={directSponsor}
            placeholder='Enter Direct Sponsor Name'
            onChange={(e) => setDirectSponsor(e.target.value)}
          />
        </div>

        {/* Placement Username field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Placement Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={placementuser}
            placeholder='Enter Placement Username'
            onChange={(e) => setPlacementuser(e.target.value)}
          />
        </div>

        {/* Contact field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Contact Number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded p-2"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter contact number"
            pattern="[0-9]{10}"
            required
          />
        </div>

        {/* Bank field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Bank</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            placeholder="Enter bank name"
            required
          />
        </div>

        {/* Bank account number field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Bank Account Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            placeholder="Enter bank account number"
            required
          />
        </div>

        {/* PayNow Name field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">PayNow Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={paynowName}
            onChange={(e) => setPaynowName(e.target.value)}
            placeholder="Enter PayNow name"
            required
          />
        </div>

        {/* PayNow Number field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">PayNow Number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded p-2"
            value={paynowNumber}
            onChange={(e) => setPaynowNumber(e.target.value)}
            placeholder="Enter PayNow number"
            pattern="[0-9]{8}" // Assuming a 8-digit PayNow number
            required
          />
        </div>

        {/* NRIC Number field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">NRIC Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={nric}
            onChange={(e) => setNric(e.target.value)}
            placeholder="Enter NRIC number"
            required
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
          Save Changes
        </button>
      </div>
    </Modal>
  );
};

export default EditUserProfileModal;
