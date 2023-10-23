
import { Route, Routes} from 'react-router-dom';

import Home from "./pages/Home/Home"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Header from './components/header/Header';
import SiderBar from "./components/sidebar/SideBar"
import Footer from "./components/footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='product/:id' element={<ProductDetail/>}/>
        </Routes>
      <SiderBar/>
      <Footer/>
    </div>
  );
}

export default App;
