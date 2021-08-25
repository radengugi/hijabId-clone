import React from 'react';
import axios from 'axios';
import { URL_API } from '../helper';
import { Button, Collapse, Input } from 'reactstrap';

class DetailProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            thumbnail: 0,
            qty: 1,
            openType: false,
            type: "",
            message: "",
            selectedType: {}
        }
    }

    componentDidMount() {
        this.getProductDetail()
    }

    getProductDetail = () => {
        // console.log(this.props.location)
        axios.get(URL_API + `/products${this.props.location.search}`)
            .then(res => {
                // console.log("Data Detail :", res.data[0])
                this.setState({ detail: res.data[0] })
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderImage = () => {
        let { images } = this.state.detail
        // console.log(images)
        return images.map((item, index) => {
            return (
                <img src={item} key={index} width="100%" onClick={() => this.setState({ thumbnail: index })}
                    style={{ borderBottom: this.state.thumbnail == index && "3px solid #ffcccc" }} />
            )
        })
    }

    btnMinus = () => {
        if (this.state.qty > 1) {
            this.setState({ qty: this.state.qty -= 1 })
        }
    }

    btnPlus = () => {
        this.setState({ qty: this.state.qty += 1 })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.detail.id &&
                        <>
                            <div className="col-md-1" style={{ border: '1px solid black' }}>
                                {this.renderImage()}
                            </div>
                            <div className="col-md-6" style={{ border: '1px solid black' }}>
                                <img src={this.state.detail.images[this.state.thumbnail]} width="450px" />
                            </div>
                            <div className="col-md-5" style={{ border: '1px solid black' }}>
                                <h4 style={{ fontWeight: 'bold' }}>{this.state.detail.nama}</h4>
                                <span>{this.state.detail.brand}</span>
                                <div className="my-5">
                                    <h4 className="text-muted">Deskripsi Produk</h4>
                                    <pre className="text-muted" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'inherit' }}>{this.state.detail.deskripsi}</pre>
                                </div>
                                <div>
                                    <h6>Choose Type :</h6>
                                    <span onClick={() => this.setState({ openType: !this.state.openType })} style={{ cursor: 'pointer', marginLeft:'1vw' }}>
                                        Type : {this.state.selectedType.type}</span>
                                    <Collapse isOpen={this.state.openType} style={{marginLeft:'1vw'}}>
                                        {
                                            this.state.detail.stock.map((item, index) => {
                                                return (
                                                    <div>
                                                        <Button outline color="secondary" size="sm" style={{ width: '100%', border: 'none', textAlign: 'left' }}
                                                            onClick={() => this.setState({ selectedType: item, qty: 1 })} >{item.type} : {item.qty}
                                                        </Button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Collapse>
                                </div>
                                <div className="my-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h6>Harga</h6>
                                    <h6 style={{ fontWeight: 'bold' }}>Rp {this.state.detail.harga.toLocaleString()}</h6>
                                </div>
                                <div className="my-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h6>Jumlah</h6>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className="material-icons" onClick={this.btnMinus}>remove</span>
                                        <Input style={{ width: '5vw', textAlign: 'center' }} value={this.state.qty}></Input>
                                        <span className="material-icons" onClick={this.btnPlus}>add</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default DetailProduct;