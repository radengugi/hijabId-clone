import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LeftCategory from '../components/leftCategory'

class BestSeller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-3">
                        <LeftCategory />
                    </div>
                    <div className="col-9">
                        <h3 style={{ fontWeight: 'bold' }}>Best Seller</h3>
                        <div style={{ width: '61vw', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            <div className="col-3 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/0927222ebfcca360.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 my-4 mx-2">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/9ec713afde8936a9.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/f91bf1ba9d050b7b.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 my-4 mx-2">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/a8a84bd412431105.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 my-4 mx-2">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/6fa57a87435d79b8.jpg" alt="Card image cap" />
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

export default BestSeller;