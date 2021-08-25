import React from 'react';
import CardBusanaMuslim from '../components/cardBusanaMuslim';
import CardCollection from '../components/cardCollection';
import CardTokoOnline from '../components/cardTokoOnline';
import CarouselComp from '../components/carousel';
import CarouselProduct from '../components/carouselProduct'
import Features from '../components/features';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div>
                <div>
                    {/* <div className="col-md-12"> */}
                    <CarouselComp />
                    {/* </div> */}
                    <div className="col-md-12 text-center my-5">
                        <h2 className="text-img" style={{ fontFamily: 'cursive' }}>Hijab.id Collections</h2>
                        <h6 className="text-muted my-4">Koleksi Terbaik di Tahun 2021</h6>
                    </div>
                </div>
                <CardCollection />
                <div className="container-fluid text-center mt-4"
                    style={{ backgroundColor: 'rgba(229, 138, 222, 0.1)', height: '20vh' }}>
                    <h2 style={{ fontFamily: 'initial', position: 'relative', top: '7vh' }}>Toko Online HIJAB</h2>
                </div>
                <CardTokoOnline />
                <div className="container-fluid text-center"
                    style={{ backgroundColor: 'rgba(229, 138, 222, 0.05)', height: '20vh' }}>
                    <h2 style={{ fontFamily: 'initial', position: 'relative', top: '7vh' }}>Busana Muslim</h2>
                </div>
                <CardBusanaMuslim />
                <div className="text-muted my-5" style={{display:'flex'}}>
                    <h4 className="col-md-5" style={{fontSize:'40px',paddingLeft:'3vw'}}>Hijab Printing Terbaru hanya di HIJAB.ID</h4>
                    <h6 className="col-md-7" style={{padding:'0 3vw'}}>Hijab.id lahir dari keyakinan bahwa Fashion itu milik semua orang, termasuk wanita Muslim. Wanita muslim juga tetap bisa berekspresi dan bergaya sesuai dengan karakter, kepribadian dan tren. Melalui Hijab.id, kami menyajikan koleksi Kerudung / Hijab Segi Empat yang menjunjung nilai budaya Indonesia dan budaya Islam dalam satu kesatuan untuk melengkapi kebutuhan dasar Wanita Muslim yang berkualitas dan orisinalitas.<br/><br/>Selain menghadirkan Printed Scarf / Hijab Printing Terbaru, Hijab.id juga menghadirkan Busana Muslim Modern, Voal Plain, Hijab Syar’i dan Aksesoris.<br/><br/>Dengan menggabungkan desain yang inovatif dan teknologi tekstil terbaru, kami berkomitmen untuk selalu menghadirkan produk hijab dan pakaian yang nyaman dan cocok untuk digunakan sehari-hari oleh seluruh Wanita Muslim Indonesia.</h6>
                </div>
                {/* <CarouselProduct />
                <Features />
                <div>
                    <img src="https://www.sicepat.com/images/background2.png" width='100%' />
                </div> */}
            </div>
        );
    }
}

export default LandingPage;