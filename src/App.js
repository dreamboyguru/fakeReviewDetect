import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './componants/user/Header';
import AdminHeader from './componants/admin/AdminHeader';
import Login from './componants/admin/Login';

function App() {
  const admin = localStorage.getItem('admin') || 'false';
  return (
    <div className="App">
       {/* <Header /> */}
       <body className='bg-gray-100 min-h-screen max-h-auto'>
          <Routes>
            {/* <Route path='/' element={<Product />} />
            <Route path='admin' element={<Products />} />
            <Route path='admin/review' element={<Reviews />} /> */}
            <Route path='/' element={<Header />} />
            <Route path='admin' element={
              (admin === 'false') ? <Login /> : <AdminHeader />} />
            <Route path='login' element={<Login />} />
          </Routes>
          
          {/* <Test />
          <Test /> */}
       </body>
    </div>
  );
}

export default App;
