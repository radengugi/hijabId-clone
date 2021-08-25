import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LeftCategory from '../components/leftCategory';

class HeadloopMask extends React.Component {
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
                        <h3 style={{ fontWeight: 'bold' }}>Accessories / Headloop Mask</h3>
                        <div style={{ width: '61vw', display: 'flex', flexWrap: 'wrap' }}>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/3e538d96b93942ce.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/9be64a92c434837f.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/3d80888af7372dae.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/6c1beee2548595d7.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/41e1168af0accb8a.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/3606d81192916f81.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/ad531ac288c6e585.jpg" alt="Card image cap" />
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

export default HeadloopMask;