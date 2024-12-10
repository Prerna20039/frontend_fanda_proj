import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import Users from './components/users';
import Commission from './components/commission';
// import Withdrawal from './components/Withdrawal';
// import Password from './components/Password';
// import Newsfeed from './components/Newsfeed';

const App = () => {
  return (
    <Router>
      <div className="h-screen flex">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Updated Route components */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/commission" element={<Commission />} />
            {/* <Route path="/commission" element={<Commission />} />
             <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/password" element={<Password />} />
            <Route path="/newsfeed" element={<Newsfeed />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
