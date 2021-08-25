import React from 'react';

class TentangKami extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div style={{ width: '100%', height: '80vh', backgroundImage: `url("https://hijab.id/tm_images/slide/c9e428c2af.jpg") `, backgroundSize: 'cover' }}>
                    {/* <div style={{ position: 'relative', top: '10vh', right: '5vw', float: 'right' }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: '35px', color: 'whitesmoke' }}>CEK KEBERADAAN PAKET KAMU</h2>
                        <p style={{ fontSize: '18px', color: 'whitesmoke' }}>Cara mudah untuk lacak keberadaan paket kamu</p>
                    </div> */}
                </div>
                <div className="container">
                    <h2 className="my-5">Tentang Kami - HIJAB.ID - Toko Online Pakaian dan Hijab</h2>
                    <span>Sekilas tentang Hijab.id</span>
                    <p className="my-4">Assalamu'alaikum Wr.Wb.</p>
                    <p className="my-3">HIJAB.ID adalah toko Online dan Offline yang menyediakan koleksi pakaian dan hijab untuk muslimah.</p>
                    <p className="my-3">Koleksi dari hijab.id dirancang dengan tujuan memberikan penampilan yang cantik, anggun, nyaman dan percaya diri namun tetap syar'i.</p>
                    <p className="my-3">Kami sangat mengutamakan kualitas dari koleksi kami terutama dalam pemilihan bahan, kerapihan jahitan, juga kemasan.</p>
                    <p className="my-3">Selain itu kami sangat mengutamakan pelayanan yang amanah.</p>
                    <p className="my-3">Toko Offline kami berada di kota Bandung, dengan alamat Ruko Puri Dago A3 Jl.Terusan Jakarta, Antapani, Bandung 40293.</p>
                    <p className="my-3">Kami harap koleksi kami dapat diterima dan menambah kepercayaan diri kaum muslimah di manapun khususnya di Indonesia.</p>
                    <p className="my-3 mb-5">Terima Kasih</p>
                </div>
                <div>
                    <img src="https://www.sicepat.com/images/background2.png" width='100%' />
                </div>
            </div>
        );
    }
}

export default TentangKami;