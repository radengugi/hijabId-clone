import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LeftCategory from '../components/leftCategory';
import { URL_API } from '../helper';

class PrintedHijabSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduk: []
        }
    }

    componentDidMount() {
        this.getProduct()
    }

    getProduct = () => {
        axios.get(URL_API + `/products?category=${'Printed Hijab Square'}`)
            .then(res => {
                // console.log("Get Success :", res.data)
                this.setState({ dataProduk: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    printProduct = () => {
        // console.log("Cek data Product :", this.state.dataProduk)
        return this.state.dataProduk.map((item, index) => {
            return (
                <Card className="my-4">
                    <Link to={`/detail-product?id=${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <CardImg style={{ width: '180px', margin: 'auto' }} top width="100%" src={item.images[0]} alt="Bosphorus Warm Blue" />
                        <CardBody>
                            <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px', width: '180px' }}>{item.nama}</CardSubtitle>
                            <CardText style={{ fontWeight: 'bold' }}>Rp {item.harga.toLocaleString()}</CardText>
                        </CardBody>
                    </Link>
                </Card>
            )
        })
    }


    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-3">
                        <LeftCategory />
                    </div>
                    <div className="col-9">
                        <h3 style={{ fontWeight: 'bold' }}>Hijab / Printed Hijab Square</h3>
                        <div className="mt-4 card-product">
                            {this.printProduct()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrintedHijabSquare;

{/* <div className="col-9">
    <div style={{ width: '61vw', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className="col-3 my-4">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/49db215780cd2a88.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4 mx-2">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/e8462a3217371a0b.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/eba15b497d33ffe9.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4 mx-2">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/9649e72694930a7a.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4 mx-2">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/97a526d476e0adc3.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4 mx-2">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/6cb4b6bfea1edf0c.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4 mx-2">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/74b99c4d052c3443.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4 mx-2">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/ec1dc6820bda3b1c.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-3 my-4 mx-2">
            <Card>
                <CardImg top width="100%" src="https://hijab.id/tm_images/produk/thumb/793112799ca35e4d.jpg" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '15px' }}>Hannah Hijab Instant Mammadis X Hijab.id Olive</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp 185.000</CardText>
                </CardBody>
            </Card>
        </div>
    </div>
</div> */}