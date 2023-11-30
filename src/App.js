
import { Route, Routes} from 'react-router-dom';

import Home from "./pages/Home/Home"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Header from './components/header/Header';
import SiderBar from "./components/sidebar/SideBar"
import Footer from "./components/footer/Footer"
import './App.css';
import PayMent from './components/payment/PayMent';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='product/:id' element={<ProductDetail/>}/>
          <Route path='/checkout' element={<PayMent/>} />
        </Routes>
      <SiderBar/>
      <Footer/>
    </div>
  );
}

export default App;
