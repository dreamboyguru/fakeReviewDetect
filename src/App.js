import './App.css';
import Test from './componants/Test';
import Header from './componants/user/Header';
import Product from './componants/user/Product';

function App() {
  return (
    <div className="App">
       <Header />
       <body className='bg-gray-100'>
          <Product />
          {/* <Test />
          <Test /> */}
       </body>
    </div>
  );
}

export default App;
