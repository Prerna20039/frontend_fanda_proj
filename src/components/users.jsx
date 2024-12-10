import React, { useState } from 'react';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending'); // 'ascending' or 'descending'
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // For example, 10 pages

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order); // Set sort order to ascending or descending
  };

  const handleAddNew = () => {
    alert("Add New User functionality");
  };

  const handleExport = () => {
    alert("Export functionality");
  };

  // Example user data (you would replace this with real data)
  const users = Array(100).fill(null).map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `123-456-7890`,
    address: `Address ${index + 1}`,
    city: `City ${index + 1}`,
    country: `Country ${index + 1}`,
    occupation: `Occupation ${index + 1}`,
    company: `Company ${index + 1}`,
    joined: `2024-01-01`,
    status: `Active`,
    role: `Admin`,
    age: `${20 + (index % 10)}`,
    gender: `Female`,
    lastLogin: `2024-01-01 10:00 AM`,
  }));

  // Filter and sort logic
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Sort users based on the order
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="absolute top-[120px] left-[400px]">
      {/* Search and Sort Section */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-[248px] h-[48px]">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Users"
              className="w-full h-full pl-2 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img 
              src="./MagnifyingGlass.png" 
              alt="Search Icon" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
            />
          </div>

          <div className="flex space-x-0 pl-11 ml-auto">
            <button
              onClick={() => handleSort('ascending')}
              className={`w-[120px] h-[48px] ${sortOrder === 'ascending' ? 'bg-basecolor text-white' : 'bg-bgcolor4 text-txtcolor4'} rounded-tl-lg rounded-bl-lg`}
            >
              List
            </button>
            <button
              onClick={() => handleSort('descending')}
              className={`w-[120px] h-[48px] ${sortOrder === 'descending' ? 'bg-basecolor text-white' : 'bg-bgcolor4 text-txtcolor4'} rounded-tr-lg rounded-br-lg`}
            >
              Matrix
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-x-4 flex items-center">
          <button
            onClick={handleAddNew}
            className="font-bold text-[14px] w-[192px] h-[48px] bg-bgcolor3 text-basecolor rounded-lg border border-basecolor ml-[300px] flex items-center justify-center space-x-2"
          >
            <img src="./UserPlus.png" alt="Add User" className="w-6 h-6" />
            <span>Add New User</span>
          </button>

          <button
            onClick={handleExport}
            className="w-[120px] text-[14px] h-[48px] bg-basecolor text-white rounded-lg flex items-center justify-center space-x-2"
          >
            <img src="./Vector2.png" alt="Export" className="w-5 h-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Table Container with Horizontal Scroll and Box Style */}
      <div className="overflow-x-auto w-[1200px] h-[600px] border border-gray-300 rounded-lg shadow-lg">
        <table className="table-auto min-w-full border-collapse">
          <thead>
            <tr className="bg-white text-basecolor font-bold text-[14px]" >
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Occupation</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Joined</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Last Login</th>
            </tr>
          </thead>
          <tbody>
  {sortedUsers.map((user, index) => (
    <tr
      key={user.id}
      className={ index % 2 === 0 ? 'bg-gray-100 text-[14px]' : 'bg-white text-[14px]'}  // Alternate rows
    >
      <td className="px-4 py-2">{user.id}</td>
      <td className="px-4 py-2">{user.name}</td>
      <td className="px-4 py-2">{user.email}</td>
      <td className="px-4 py-2">{user.phone}</td>
      <td className="px-4 py-2">{user.address}</td>
      <td className="px-4 py-2">{user.city}</td>
      <td className="px-4 py-2">{user.country}</td>
      <td className="px-4 py-2">{user.occupation}</td>
      <td className="px-4 py-2">{user.company}</td>
      <td className="px-4 py-2">{user.joined}</td>
      <td className="px-4 py-2">{user.status}</td>
      <td className="px-4 py-2">{user.role}</td>
      <td className="px-4 py-2">{user.age}</td>
      <td className="px-4 py-2">{user.gender}</td>
      <td className="px-4 py-2">{user.lastLogin}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>

      {/* Pagination with Small Circle Numbers */}
      <div className="relative top-[0.2px] left-[700px]   space-x-0.2">
        <button 
          className="px-2 py-1 text-s rounded-full hover:bg-gray-200 text-gray-400"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
         &lt; {/* Left Arrow */}
        </button>
        
        {[...Array(totalPages)].map((_, index) => (
          <button 
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === index + 1 ? 'bg-basecolor text-white' : 'text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
        
        <button 
          className="px-3 py-2 rounded-full text-gray-400"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
           &gt; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Users;
