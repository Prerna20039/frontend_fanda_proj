import React, { useState } from 'react';
import EditPasswordModal from './EditPasswordModal';
import EditUserProfileModal from './EditUserProfileModal';
import AddNewMemberModal from './AddNewMemberModal';
import EditPlacementBonusBalanceModal from './EditPlacementBonusBalanceModal';
import AddNewsFeedModal from './AddNewsFeedModal';
import EditNewsFeedModal from './EditNewsFeedModal';
import UploadNewsFeedModal from './UploadNewsFeedModal';

const Commission = () => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [isPlacementBonusModalOpen, setIsPlacementBonusModalOpen] = useState(false);
  const [isAddNewsFeedModalOpen, setIsAddNewsFeedModalOpen] = useState(false);
  const [isEditNewsFeedModalOpen, setIsEditNewsFeedModalOpen] = useState(false);
  const [isUploadNewsFeedModalOpen, setIsUploadNewsFeedModalOpen] = useState(false);

  return (
    <div className="p-4 absolute top-[120px] left-[400px]">
      <button
        onClick={() => setIsPasswordModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-6"
      >
        Edit Password
      </button>

      <button
        onClick={() => setIsProfileModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-6"
      >
        Edit Profile
      </button>

      <button
        onClick={() => setIsAddMemberModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-6"
      >
        Add New Member
      </button>

      <button
        onClick={() => setIsPlacementBonusModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-6"
      >
        Edit Placement Bonus Balance
      </button>

      <button
        onClick={() => setIsAddNewsFeedModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-6"
      >
        Add News Feed
      </button>

      <button
        onClick={() => setIsEditNewsFeedModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-6"
      >
        Edit News Feed
      </button>

      <button
        onClick={() => setIsUploadNewsFeedModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Upload News Feed
      </button>

      {/* Modal for editing password */}
      <EditPasswordModal
        isOpen={isPasswordModalOpen}
        onRequestClose={() => setIsPasswordModalOpen(false)}
      />

      {/* Modal for editing profile */}
      <EditUserProfileModal
        isOpen={isProfileModalOpen}
        onRequestClose={() => setIsProfileModalOpen(false)}
      />

      {/* Modal for adding a new member */}
      <AddNewMemberModal
        isOpen={isAddMemberModalOpen}
        onRequestClose={() => setIsAddMemberModalOpen(false)}
      />

      {/* Modal for editing placement bonus balance */}
      <EditPlacementBonusBalanceModal
        isOpen={isPlacementBonusModalOpen}
        onRequestClose={() => setIsPlacementBonusModalOpen(false)}
      />

      {/* Modal for adding a news feed */}
      <AddNewsFeedModal
        isOpen={isAddNewsFeedModalOpen}
        onRequestClose={() => setIsAddNewsFeedModalOpen(false)}
      />

      {/* Modal for editing a news feed */}
      <EditNewsFeedModal
        isOpen={isEditNewsFeedModalOpen}
        onRequestClose={() => setIsEditNewsFeedModalOpen(false)}
      />

      {/* Modal for uploading news feed */}
      <UploadNewsFeedModal
        isOpen={isUploadNewsFeedModalOpen}
        onRequestClose={() => setIsUploadNewsFeedModalOpen(false)}
      />
    </div>
  );
};

export default Commission;
