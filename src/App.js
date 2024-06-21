import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componants/user/Header';
import Product from './componants/user/Product';
import Products from './componants/admin/Products';

function App() {
  return (
    <div className="App">
       <Header />
       <body className='bg-gray-100'>
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
