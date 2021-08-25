import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LeftCategory from '../components/leftCategory'

class LeggingWudhu extends React.Component {
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
                        <h3 style={{ fontWeight: 'bold' }}>Accessories / Legging Wudhu</h3>
                        <div style={{ width: '61vw', display: 'flex', flexWrap: 'wrap' }}>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/7a5e1ebd4dfb7b4e.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/7d7f771debecc003.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/0bd5c0a9c84d29c3.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/f33eb674fc0a5053.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/bf31617a559e8d0d.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 mx-4 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/cb6f1a58376f9e58.jpg" alt="Card image cap" />
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

export default LeggingWudhu;