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

const EditNewsFeedModal = ({ isOpen, onRequestClose, existingTitle, existingContent }) => {
  const [title, setTitle] = useState(existingTitle || '');
  const [content, setContent] = useState(existingContent || '');

  const handleSaveAsDraft = () => {
    if (!title || !content) {
      alert('Please fill in all fields!');
      return;
    }
    alert('Newsfeed saved as draft!');
    onRequestClose();
  };

  const handleUpdateNewsFeed = () => {
    if (!title || !content) {
      alert('Please fill in all fields!');
      return;
    }
    alert('Newsfeed updated!');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
      <h2 className="text-xl font-bold mb-4 text-txtcolor">Edit News Feed</h2>
      <div className="space-y-4">
        {/* Newsfeed Title field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Newsfeed Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={title}
            placeholder="Enter Newsfeed Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Content field */}
        <div>
          <label className="block text-sm font-medium text-basecolor">Content</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            value={content}
            placeholder="Enter Content"
            onChange={(e) => setContent(e.target.value)}
            rows="5"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={handleSaveAsDraft}
          className="border border-basecolor text-basecolor px-4 py-2 rounded"
        >
          Save as Draft
        </button>
        <button
          onClick={handleUpdateNewsFeed}
          className="bg-basecolor text-white px-4 py-2 rounded"
        >
          Update News Feed
        </button>
      </div>
    </Modal>
  );
};

export default EditNewsFeedModal;
