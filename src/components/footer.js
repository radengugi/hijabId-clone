import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListInlineItem } from 'reactstrap'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', height: '40vh', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(230, 142, 195, 0.3)' }}>
                    <div className="container row col-12">
                        <div className="col-md-4">
                            <h6 style={{fontWeight:'bold'}}>INFO CONTACT</h6>
                            <div style={{ display: 'flex', fontSize:'13px' }}>
                                <div>
                                    <span class="material-icons">place</span>
                                </div>
                                <div className="mx-3">
                                    Ruko Puri Dago no. A3
                                    Jl. Terusan Jakarta, Antapani, Bandung 40293
                                    <p>
                                        Jawa Barat - Indonesia
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', fontSize:'13px' }}>
                                <div>
                                    <span class="material-icons">phone</span>
                                </div>
                                <div className="mx-3">021-1234-5678</div>
                            </div>
                            <div style={{ display: 'flex', fontSize:'13px' }}>
                                <div>
                                    <span class="material-icons">email</span>
                                </div>
                                <div className="mx-3">Support: customer.care@sicepat.com</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h6 style={{fontWeight:'bold'}}>INFORMASI</h6>
                            <ul style={{ fontSize:'13px' }}>
                                <li>
                                    <Link to="/tentang-kami" style={{textDecoration:'none', color:'black'}}>Tentang Kami</Link>
                                </li>
                                <li>Syarat Penggunaan</li>
                                <li>Ketentuan Privasi</li>
                                <li>Kontak kami</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6 style={{fontWeight:'bold'}}>DOWNLOAD APP</h6>
                            <div>
                                <img src='https://www.sicepat.com/static/img/playstore@2x.png' width='120px' />
                            </div>
                            <div className="my-2">
                                <img src='https://www.sicepat.com/static/img/appstore@2x.png' width='120px' />
                            </div>
                            <div>
                                <p style={{fontWeight:'bold'}}>Media Social :</p>
                                <Link className="nav-item facebook">
                                    <span><img src="https://img.pngio.com/facebook-icon-facebook-facebook-logo-social-media-icon-png-and-facebook-icon-png-transparent-background-640_640.png" width="40px" /></span>
                                </Link>
                                <Link className="nav-item instagram mx-2">
                                    <span><img src="https://image.flaticon.com/icons/png/512/174/174855.png" width="28px" /></span>
                                </Link>
                                <Link className="nav-item twitter mx-1">
                                    <span><img src="https://cdn.iconscout.com/icon/free/png-256/twitter-213-569318.png" width="40px" /></span>
                                </Link>
                                <Link className="nav-item youtube mx-1">
                                    <span><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png" width="30px" /></span>
                                </Link>
                                <Link className="nav-item pinterest mx-1">
                                    <span><img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" width="40px" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr style={{ marginTop: '1vh' }}></hr>
                    <p className="col-6" style={{ fontSize: '13px' }}><b>© 2021 Hijab.id - All rights reserved.</b></p>
                </div>
            </div>
        );
    }
}

export default Footer;