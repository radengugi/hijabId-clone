import React from 'react';
import { Button, Table, Input, Badge } from 'reactstrap'
import { URL_API } from '../helper';
import { connect } from 'react-redux'
import { getProductsAction } from '../actions'
import ModalsProduct from '../components/modalsProduct';
import ModalsEditProduct from '../components/modalsEditProduct'
import axios from 'axios';

let kursor = {
    cursor: "pointer",
    marginRight: '0.5vw'
}

class ProductManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalsEdit: false,
            data: props.products,
            detailProduk: {},
            thumbnail: 0
        }
    }

    componentDidMount() {
        this.props.getProductsAction()
    }

    printProduct = () => {
        // console.log("Cek get data :", this.props.products)
        return this.props.products.map((item, index) => {
            return <tr style={{ fontSize: '13px' }}>
                <td>{index + 1}</td>
                <td style={{ width: '20vw', textAlign: 'center' }}>
                    {
                        this.state.thumbnail[0] == index ?
                            <img src={item.images[this.state.thumbnail[1]]} style={{ width: '80%' }} alt={item.nama + index} />
                            :
                            <img src={item.images[0]} style={{ width: '80%' }} alt={item.nama + index} />
                    }
                    <div>
                        {
                            item.images.map((value, idx) => {
                                return <img src={value} style={{ kursor }} width="20%" alt={item.nama + idx}
                                    onClick={() => this.setState({ thumbnail: [index, idx] })} />
                            })
                        }
                    </div>
                </td>
                <td>{item.nama}</td>
                <td>{item.deskripsi}</td>
                {/* <td>{item.brand}</td> */}
                <td>{item.category}</td>
                <td style={{ width: '10%' }}>
                    {
                        item.stock.map((item, index) => {
                            return <h5 style={{ fontSize: '13px' }}>{item.type} : {item.qty}</h5>
                        })
                    }
                </td>
                <td style={{ width: '10%' }}>Rp {item.harga.toLocaleString()}</td>
                <td>
                    <Button style={{ fontSize: '13px', marginBottom: '2vh' }} type="button" color="warning" onClick={() => this.setState({ detailProduk: item, modalsEdit: !this.state.modalsEdit })}>Edit</Button>{' '}
                    <Button style={{ fontSize: '13px' }} color="danger" onClick={() => this.onBtnDelete(item.id)}>Delete</Button>
                </td>
            </tr>
        })
    }

    onBtnDelete = (id) => {
        axios.delete(URL_API + `/products/${id}`)
            .then(res => {
                // this.getDataProduct()
                this.props.getProductsAction()
                alert("Delete Success", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    toggleEdit = () => {
        this.setState({ modalsEdit: !this.state.modalsEdit })
    }

    // sorting = () => {
    //     if (this.sort.value === "nameAsc") {
    //         axios.get(URL_API + `/products?_sort=nameProduct&_order=asc`)
    //             .then(res => {
    //                 console.log('Sorting Name Asc :', res.data)
    //                 this.setState({ products: res.data })
    //             })
    //             .catch(err => {
    //                 console.log('ERROR Name Asc :', err)
    //             })
    //     } else if (this.sort.value === "nameDesc") {
    //         axios.get(URL_API + `/products?_sort=nameProduct&_order=desc`)
    //             .then(res => {
    //                 console.log('Sorting Name Desc :', res.data)
    //                 this.setState({ products: res.data })
    //             })
    //             .catch(err => {
    //                 console.log('ERROR Name Desc :', err)
    //             })
    //     } else if (this.sort.value === "priceAsc") {
    //         axios.get(URL_API + `/products?_sort=price&_order=asc`)
    //             .then(res => {
    //                 console.log('Sorting Price Asc :', res.data)
    //                 this.setState({ products: res.data })
    //             })
    //             .catch(err => {
    //                 console.log('ERROR Price Asc :', err)
    //             })
    //     } else if (this.sort.value === "priceDesc") {
    //         axios.get(URL_API + `/products?_sort=price&_order=desc`)
    //             .then(res => {
    //                 console.log('Sorting Price Desc :', res.data)
    //                 this.setState({ products: res.data })
    //             })
    //             .catch(err => {
    //                 console.log('ERROR Price Desc :', err)
    //             })
    //     }
    // }

    // Cara kedua

    // sortReducer = () => {
    //     let field = this.sortProduct.value.split('-')[0]
    //     let sortType = this.sortProduct.value.split('-')[1]
    //     let tempData = [...this.props.products]
    //     if (sortType == 'asc') {
    //         let dataAsc = tempData.sort((a, b) => {
    //             return a[field] - b[field]
    //         })
    //         console.log(dataAsc)
    //         this.props.getProductsAction(dataAsc)
    //     } else if (sortType == 'desc') {
    //         let dataDesc = tempData.sort((a, b) => {
    //             return b[field] - a[field]
    //         })
    //         console.log(dataDesc)
    //         this.props.getProductsAction(dataDesc)
    //     }
    // }

    handleSorting = () => {
        // console.log(this.sortProduct.value, this.sortProduct.value.split("-"))
        let field = this.sortProduct.value.split("-")[0]
        let sortType = this.sortProduct.value.split("-")[1]
        axios.get(URL_API + `/products?_sort=${field}&_order=${sortType}`)
            .then(res => {
                console.log(field, sortType, res.data)
                // this.setState({ data: res.data })
                this.props.getProductsAction(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="text-center mt-5">
                    <h2>Product Management</h2>
                    <div className="my-5" style={{ display: 'flex', float: 'right' }}>
                        <Input type='select' style={{ width: '20vw', marginRight: '1vw' }} onChange={this.handleSorting} innerRef={elemen => this.sortProduct = elemen}>
                            <option value="nama-asc">Nama Asc</option>
                            <option value="nama-desc">Nama Desc</option>
                            <option value="harga-asc">Harga Asc</option>
                            <option value="harga-desc">Harga Desc</option>
                        </Input>
                        <Button type="button" color="primary" style={{ float: 'right' }} onClick={() => this.setState({ modal: !this.state.modal })}>Add Data</Button>
                    </div>
                    <ModalsEditProduct modal={this.state.modalsEdit} detailProduk={this.state.detailProduk}
                            btClose={() => this.setState({ modalsEdit: !this.state.modalsEdit })} getDataProduct={this.props.getProductsAction} />
                    <ModalsProduct modal={this.state.modal}
                        btClose={() => this.setState({ modal: !this.state.modal })} getDataProduct={this.props.getProductsAction} />
                </div>
                <Table hover style={{ marginTop: '13vh', textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Nama</th>
                            <th>Deskripsi</th>
                            {/* <th>Brand</th> */}
                            <th>Kategori</th>
                            <th>Stock</th>
                            <th>Harga</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.printProduct()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapToProps = ({ productReducers }) => {
    return {
        products: productReducers.products_list,
        // products_list: productReducers.products_sort
    }
}

export default connect(mapToProps, { getProductsAction })(ProductManagement);