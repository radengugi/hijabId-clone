import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LeftCategory from '../components/leftCategory';
import { URL_API } from '../helper';

class SyariHijab extends React.Component {
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
        axios.get(URL_API + `/products?category=${'Syari Hijab'}`)
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
                        <h3 style={{ fontWeight: 'bold' }}>Hijab / Syar'i Hijab</h3>
                        <div className="mt-4 card-product">
                            {this.printProduct()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SyariHijab;