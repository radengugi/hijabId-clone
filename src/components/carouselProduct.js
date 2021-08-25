import React from 'react';
import Slider from "react-slick";

class CarouselProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div >
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="col-6">
                                    <img src="https://content-main-api-production.sicepat.com/public/file/608f5a906053ae00115c7fdd" />
                                </div>
                                <div className="col-6" style={{ marginTop: '15vh' }}>
                                    <h4 style={{ fontSize: '30px', fontWeight: 'bold' }}>GRES (Gebyar Reward SiCepat)</h4>
                                    <p>Ayo, daftar GRES (Gebyar Reward SiCepat)!</p>
                                    <p>Dapatkan reward POIN dari setiap pengiriman paketmu dengan menggunakan layanan SiCepat Ekspres.
                                    Poin yang kamu kumpulkan bisa ditukar di SiCepat Klik dengan produk PPOB saldo e-money, pulsa, paket data, dll.</p>
                                    <p>Tunggu apa lagi? Informasi lebih lanjut klik tombol dibawah</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="col-6">
                                    <img src="https://content-main-api-production.sicepat.com/public/file/606591179ac42200126eeb65" />
                                </div>
                                <div className="col-6" style={{ marginTop: '15vh' }}>
                                    <h4 style={{ fontSize: '30px', fontWeight: 'bold' }}>Bayar Reguler Berasa Sameday</h4>
                                    <p>Kirim paket, bayar reguler berasa sameday loh. Anti pehape, barang langsung sampe deh. Dengan estimasi 8 jam kamu bisa menikmati semua layanan SiCepat⁣</p>
                                    <p>Yuk jangan pusing-pusing mikir ekspedisi, karena cuma SiCepat yang pasti 😊⁣</p>
                                    <p>Bersama SiCepat Ekspres <span>#BersatuUntukMudah</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="col-6">
                                    <img src="https://content-main-api-production.sicepat.com/public/file/605d6348ff9d5a001194d1cc" />
                                </div>
                                <div className="col-6" style={{ marginTop: '15vh' }}>
                                    <h4 style={{ fontSize: '30px', fontWeight: 'bold' }}>KIRIM KE SULAWESI DAN KALIMANTAN LEBIH MURAH PAKAI HALU MANTAN</h4>
                                    <p>Hari gini masih suka HALU-in si mantan?!Capek deh, mendingan kamu cobain HALU MANTAN!😍Yaa, kali ini SiCepat Ekspres menghadirkan PROMO Khusus buat kamu yang belanja online dengan ongkir lebih murah dari Jakarta ke Sambas, Banjarbaru, Balikpapan, Goa & Deli Serdang. HALU MANTAN tersedia untuk kamu yang suka belanja online di Marketplace dengan pengiriman SiCepat. Promo ini berlaku pada periode 15 Januari 2021 sampai 30 Juni 2021.</p>
                                    <p>Tunggu apa lagi? Ayo pakai HALU MANTAN. Yang Jauh Jadi Deket, Yang Mahal Jadi Murah!🥰⁣</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default CarouselProduct;