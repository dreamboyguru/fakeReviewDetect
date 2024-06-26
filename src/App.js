import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './componants/user/Header';
import AdminHeader from './componants/admin/AdminHeader';
import Login from './componants/admin/Login';
import UserLogin from './componants/user/UserLogin';
import { useEffect, useState } from 'react';
import PurchaseHistory from './componants/user/PurchaseHistory';

function App() {
  // const admin = localStorage.getItem('admin') || 'false';
  const [pathName, setPathname] = useState();
  useEffect(() => {
    const { pathname} = window.location;
    setPathname(pathname);
  }, []);
  const user = localStorage.getItem('user') || 'false';
  const admin = localStorage.getItem('admin') || 'false';
  return (
    <div className="App">
       {/* <Header /> */}
       <body className='bg-gray-100 min-h-screen max-h-auto'>
          {/* <Routes>
            <Route path='/' element={<Header />} />
            <Route path='admin' element={
              (admin === 'false') ? <Login /> : <AdminHeader />} />
            <Route path='login' element={<Login />} />
          </Routes> */}

          {pathName === '/admin' ? 
              admin === 'true' ? <AdminHeader /> : <Login /> : 
              user === 'true' ? <Header /> : <UserLogin />}

            {/* <PurchaseHistory /> */}
       </body>
    </div>
  );
}

export default App;
