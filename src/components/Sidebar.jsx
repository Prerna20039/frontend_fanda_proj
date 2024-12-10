import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Section with Logos */}
      <div className="h-20 w-screen bg-basecolor relative">
        <div className="absolute top-[1rem] left-0 ml-12 p-2">
          <img
            src="./Group 33.png"
            alt="Logo 1"
            className="h-8 w-14 object-contain"
          />
        </div>

        <div className="absolute top-[0.5rem] left-[5.4rem] p-2">
          <img
            src="./anda.png"
            alt="Logo 2"
            className="h-12 w-12 object-contain"
          />
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="w-[339px] h-screen bg-bgcolor text-white p-0 mt-[50px] rounded-tl-none rounded-tr-[50px] flex flex-col">
        <div>
          <h2 className="text-xl font-regular text-txtcolor2 text-[12.8px] font-[Instrument Sans] pl-10 pt-6 ">Hello,</h2>
          <h3 className="text-large font-bold text-txtcolor text-[25px] font-[Instrument Sans] pl-10 pt-0 mt-0 absolute top-[170px]">Admin</h3>
        </div>

        {/* Navigation List */}
        <div className="flex-grow mt-[60px]">
          <ul className="space-y-6">
            <li className="flex items-center hover:bg-bgcolor2">
              <img src="./SidebarSimple.png" className="pl-10" />
              <Link to="/dashboard" className="text-large pl-5 block font-bold text-[16px] text-txtcolor font-[Instrument Sans]">Dashboard</Link>
            </li>
            <li className="flex items-center hover:bg-bgcolor2">
              <img src="./Users.png" className="pl-10" />
              <Link to="/users" className="text-large pl-5 block font-bold text-[16px] text-txtcolor font-[Instrument Sans]">Users</Link>
            </li>
            <li className="flex items-center hover:bg-bgcolor2">
              <img src="./Coins.png" className="pl-10" />
              <Link to="/commission" className="text-large pl-5 block font-bold text-[16px] text-txtcolor font-[Instrument Sans]">Commission</Link>
            </li>
            <li className="flex items-center hover:bg-bgcolor2">
              <img src="./HandCoins.png" className="pl-10" />
              <Link to="/withdrawal" className="text-large pl-5 block font-bold text-[16px] text-txtcolor font-[Instrument Sans]">Withdrawal Notification</Link>
            </li>
            <li className="flex items-center hover:bg-bgcolor2">
              <img src="./LockOpen.png" className="pl-10" />
              <Link to="/password" className="text-large pl-5 block font-bold text-[16px] text-txtcolor font-[Instrument Sans]">Password Notification</Link>
            </li>
            <li className="flex items-center hover:bg-bgcolor2">
              <img src="./Newspaper.png" className="pl-10" />
              <Link to="/newsfeed" className="text-large pl-5 block font-bold text-[16px] text-txtcolor font-[Instrument Sans]">Newsfeed</Link>
            </li>
          </ul>
        </div>

        {/* Logout Item */}
        <div className="absolute bottom-[140px]">
          <li className="flex items-center">
            <img src="./Vector.png" className="pl-10" />
            <Link to="/logout" className="text-large pl-5 block font-bold text-[16px] text-txtcolor3 font-[Instrument Sans]">Logout</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
