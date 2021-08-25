import React from 'react';
import { Route } from 'react-router';
import Footer from './components/footer';
import NavbarComp from './components/navbar';
import BandanaRajut from './pages/Accessories-bandanaRajut';
import HeadloopMask from './pages/Accessories-Headloop';
import LeggingWudhu from './pages/Accessories-Legging';
import Bottoms from './pages/Apparels-bottoms';
import Dress from './pages/Apparels-dress';
import HomeWear from './pages/Apparels-homewear';
import SetsTopBottom from './pages/Apparels-sets-TB';
import Tops from './pages/Apparels-tops';
import BestSeller from './pages/bestSeller';
import DetailProduct from './pages/detailProduct';
import HijabInstan from './pages/hijabInstan';
import LandingPage from './pages/landingPage';
import NewArrival from './pages/newArrival';
import PlainHijabPashmina from './pages/plainHijabPashmina';
import PlainHijabSquare from './pages/plainHijabSquare';
import PrintedHijabSquare from './pages/printedHijabSquare';
import PrintedPashmina from './pages/printedPashmina';
import ProductManagement from './pages/productManagement';
import ProductSale from './pages/productSale';
import Register from './pages/RegisterPage';
import SyariHijab from './pages/syariHijab';
import TentangKami from './pages/tentangKami';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <NavbarComp />
        <Route path="/" component={LandingPage} exact />
        <Route path="/new-arrival" component={NewArrival} />
        <Route path="/best-seller" component={BestSeller} />
        <Route path="/product-sale" component={ProductSale} />
        <Route path="/hijab-instan" component={HijabInstan} />
        <Route path="/plain-hijab-pashmina" component={PlainHijabPashmina} />
        <Route path="/plain-hijab-square" component={PlainHijabSquare} />
        <Route path="/printed-hijab-square" component={PrintedHijabSquare} />
        <Route path="/printed-pashmina" component={PrintedPashmina} />
        <Route path="/syari-hijab" component={SyariHijab} />
        <Route path="/apparels-bottoms" component={Bottoms} />
        <Route path="/apparels-dress" component={Dress} />
        <Route path="/apparels-homewear" component={HomeWear} />
        <Route path="/apparels-sets-topbottoms" component={SetsTopBottom} />
        <Route path="/apparels-tops" component={Tops} />
        <Route path="/accessories-bandana-rajut" component={BandanaRajut} />
        <Route path="/accessories-headloop-mask" component={HeadloopMask} />
        <Route path="/accessories-legging-wudhu" component={LeggingWudhu} />
        <Route path="/tentang-kami" component={TentangKami} />
        <Route path="/register" component={Register} />
        <Route path="/product-management" component={ProductManagement} />
        <Route path="/detail-product" component={DetailProduct} />
        <Footer />
      </div>
    );
  }
}

export default App;