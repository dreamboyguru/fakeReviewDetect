import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componants/user/Header';
import Product from './componants/user/Product';
import Products from './componants/admin/Products';
import Rating from  './componants/Rating';

function App() {
  return (
    <div className="App">
       <Header />
       <body className='bg-gray-100 min-h-screen max-h-auto'>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='admin' element={<Products />} />
          </Routes>
          
          {/* <Test />
          <Test /> */}
       </body>
    </div>
  );
}

export default App;
