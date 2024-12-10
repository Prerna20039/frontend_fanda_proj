import React from 'react';
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

const UploadNewsFeedModal = ({ isOpen, onRequestClose }) => {

  const handleUpload = () => {
    alert('Newsfeed uploaded successfully!');
    onRequestClose();
  };

  const handleSaveAsDraft = () => {
    alert('Newsfeed saved as draft!');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
      <h2 className="text-xl font-bold flex justify-center mb-4 text-txtcolor">Upload News Feed</h2>
      <div className="space-y-4">
        <p className="text-sm font-medium flex justify-center text-basecolor">Are you sure to upload the news feed?</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-2 mt-4">
      <button
            onClick={handleUpload}
            className="bg-basecolor text-white px-4 py-2 rounded"
        >
            Yes,upload
        </button>
        <button
            onClick={handleSaveAsDraft}
            className="border border-basecolor text-basecolor px-4 py-2 rounded flex justify-start"
        >
            No,save as draft
        </button>
        
       </div>

    </Modal>
  );
};

export default UploadNewsFeedModal;
