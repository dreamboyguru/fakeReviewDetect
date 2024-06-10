import './App.css';
import Header from './componants/user/Header';
import Product from './componants/user/Product';

function App() {
  return (
    <div className="App">
       <Header />
       <body className='bg-gray-100'>
          <Product />
       </body>
    </div>
  );
}

export default App;
