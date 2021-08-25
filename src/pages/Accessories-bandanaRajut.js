import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LeftCategory from '../components/leftCategory';

class BandanaRajut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-3">
                        <LeftCategory/>
                    </div>
                    <div className="col-9">
                        <h3 style={{ fontWeight: 'bold' }}>Accessories / Bandana Rajut</h3>
                        <div style={{ width: '61vw', display: 'flex', flexWrap: 'wrap' }}>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/28a1ded69618f026.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/b1b80e2a481d6a5a.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/4c5ca09e57d68c65.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/14d93996c792da69.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/0a39f59086d18df9.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/41ec92879d109bbe.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/7866bb55d0490b76.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/1a7fdbdddb2a53c9.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/b7045ac86d84e1ee.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BandanaRajut;