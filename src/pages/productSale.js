import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LeftCategory from '../components/leftCategory';

class ProductSale extends React.Component {
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
                        <h3 style={{ fontWeight: 'bold' }}>Product Sale</h3>
                        <div style={{ width: '61vw', display: 'flex', marginLeft: '3vw' }}>
                            <div className="col-3 my-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/49b189c3f3a3c8b9.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                                        <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-3 my-4 mx-4">
                                <Card>
                                    <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/9159c099db143e81.jpg" alt="Card image cap" />
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

export default ProductSale;