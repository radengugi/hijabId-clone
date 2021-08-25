import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { URL_API } from '../helper';
import axios from 'axios';
import { getProductsAction } from '../actions/productAction'
import { connect } from 'react-redux';

class ModalsProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: [],
            images: []
        }
    }

    onBtnAdd = () => {
        // console.log("Cek data Product :", this.props.getProductsAction())
        let nama = this.inName.value
        let deskripsi = this.inDescription.value
        let brand = this.inBrand.value
        let category = this.inCategory.value
        let harga = parseInt(this.inPrice.value)
        let images = this.state.images
        let stock = this.state.stock
        console.log({ nama, deskripsi, brand, category, stock, images, harga })

        axios.post(URL_API + '/products', {
            nama, deskripsi, brand, category, stock, images, harga
        })
            .then(res => {
                console.log(res.data)
                this.props.getProductsAction()
                this.props.btClose()
                alert('Add Data Product Success')
            })
            .catch(err => {
                console.log('ERROR POST :', err)
            })
    }

    onBtnAddStock = () => {
        // let tempStock = [...this.state.stock]
        this.state.stock.push({ id: null, type: null, qty: null })
        this.setState({ stock: this.state.stock })
    }

    printStock = () => {
        if (this.state.stock.length > 0) {
            return this.state.stock.map((item, index) => {
                return <Row style={{ margin: '3vh 0', width: '100%', marginLeft: '0vw', height: '7vh', lineHeight: '7vh' }}>
                    <Col>
                        <Input type="text" placeholder={`Type-${index + 1}`} onChange={(e) => this.handleType(e, index)} />
                    </Col>
                    <Col>
                        <Input type="number" min={0} placeholder={`Stock-${index + 1}`} onChange={(e) => this.handleStock(e, index)} />
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <a onClick={() => this.onBtnDeleteStock(index)}><span class="material-icons" style={{ color: 'orange', cursor: 'pointer' }}>delete</span></a>
                    </Col>
                </Row>
            })
        }
    }

    onBtnDeleteStock = (index) => {
        this.state.stock.splice(index, 1)
        this.setState({ stock: this.state.stock })
    }

    printImage = () => {
        if (this.state.images.length > 0) {
            return this.state.images.map((item, index) => {
                return <Row style={{ margin: '3vh 0', width: '100%', marginLeft: '0vw', height: '7vh', lineHeight: '7vh' }}>
                    <Col>
                        <Input type="text" placeholder={`Image-${index + 1}`} onChange={(e) => this.handleImage(e, index)} />
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <a onClick={() => this.onBtnDeleteImage(index)}><span class="material-icons" style={{ color: 'orange', cursor: 'pointer' }}>delete</span></a>
                    </Col>
                </Row>
            })
        }
    }

    onBtnAddImage = () => {
        this.state.images.push("")
        this.setState({ images: this.state.images })
    }

    onBtnDeleteImage = (index) => {
        this.state.images.splice(index, 1)
        this.setState({ images: this.state.images })
    }

    handleImage = (e, index) => {
        this.state.images[index] = e.target.value
    }

    handleType = (e, index) => {
        this.state.stock[index].type = e.target.value
    }

    handleStock = (e, index) => {
        this.state.stock[index].qty = parseInt(e.target.value)
    }

    onBtnCancel = () => {
        this.setState({ stock: [], images: [] })
        // fungsi untuk close modal
        this.props.btClose()
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.btClose}>
                <ModalHeader toggle={this.props.btClose} style={{ backgroundColor: '#ffcccc' }}>Add Product</ModalHeader>
                <ModalBody>
                    <FormGroup style={{ padding: '2vw' }}>
                        <Label for="textName">Input Nama</Label>
                        <Input type="text" id="textName" innerRef={elemen => this.inName = elemen} />
                    </FormGroup>
                    <FormGroup style={{ padding: '2vw', display: 'flex', flexDirection: 'column' }}>
                        <Label for="textDescription">Description</Label>
                        <Input type="textarea" id="textDescription" innerRef={elemen => this.inDescription = elemen} style={{ height: '30vh' }} />
                    </FormGroup>
                    <Row style={{ padding: '2vw' }}>
                        <Col>
                            <FormGroup>
                                <Label for="textBrand">Brand</Label>
                                <Input type="text" id="textBrand" innerRef={elemen => this.inBrand = elemen} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="textCategory">Category</Label>
                                <Input type="text" id="textCategory" innerRef={elemen => this.inCategory = elemen} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="mb-2" style={{ padding: '2vw' }}>
                        <Label>Stock</Label>
                        <Button outline color="success" type='button' size="sm" style={{ float: 'right' }} onClick={this.onBtnAddStock} >Add Stock</Button>
                        {this.printStock()}
                    </FormGroup>
                    <FormGroup className="mb-2" style={{ padding: '2vw' }}>
                        <Label>Image</Label>
                        <Button outline color="success" type='button' size="sm" style={{ float: 'right' }} onClick={this.onBtnAddImage} >Add Image</Button>
                        {this.printImage()}
                    </FormGroup>
                    <FormGroup style={{ padding: '2vw' }}>
                        <Label for="textPrice">Price</Label>
                        <Input type="text" id="textPrice" innerRef={elemen => this.inPrice = elemen} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.onBtnAdd}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.onBtnCancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}


export default connect(null, { getProductsAction })(ModalsProduct);

// const ModalsProduct = (props) => {

//     const { modal, btClose, getProductsAction } = props;
//     const dispatch = useDispatch()
//     const [nama, setNama] = useState('')
//     const [deskripsi, setDeskripsi] = useState('')
//     const [brand, setBrand] = useState('')
//     const [category, setCategory] = useState('')
//     const [stock, setStock] = useState([])
//     const [images, setImages] = useState([])
//     const [harga, setHarga] = useState('')

//     const onBtnAdd = () => {
//         // console.log("Success Add Product :",brand.value)
//         axios.post(URL_API + `/products`, {
//             nama: nama.value,
//             deskripsi: deskripsi.value,
//             brand: brand.value,
//             category: category.value,
//             stock: stock,
//             images: images,
//             harga: harga.value
//         })
//             .then(res => {
//                 console.log("Success Add Product :", res.data)
//                 // getProductsAction()
//                 // dispatch(getProductsAction(nama, deskripsi, brand, category, stock, image, harga))
//             })
//             .catch(err => {
//                 console.log("Error Add Product :", err.data)
//             })
//     }

//     const onBtnAddStock = () => {
//         console.log("Cek Stock Product :")
//         // stock.push({ id: null, type: null, qty: null })
//         setStock({ stock: stock })
//     }

//     const printStock = () => {
//         if (stock.length > 0) {
//             return stock.map((item, index) => {
//                 return (
//                     <Row>
//                         <Col>
//                             <Input type="text" placeholder={`Type${index + 1}`} onChange={(e) => handleType(e, index)} />
//                         </Col>
//                         <Col>
//                             <Input type="number" min={0} placeholder={`Stock${index + 1}`} onChange={(e) => handleStock(e, index)} />
//                         </Col>
//                         <Col>
//                             {/* <a onClick={() => this.onBtnDeleteStock(index)}>Delete</a> */}
//                         </Col>
//                     </Row>
//                 )
//             })
//         }
//     }

//     const handleType = (e, index) => {
//         stock[index].type = e.target.value
//     }

//     const handleStock = (e, index) => {
//         stock[index].qty = parseInt(e.target.value)
//     }

//     return (
//         <Modal isOpen={modal} toggle={btClose}>
//             <ModalHeader toggle={btClose}>Add Product</ModalHeader>
//             <ModalBody>
//                 <FormGroup style={{ padding: '2vw' }}>
//                     <Label for="textName">Input Nama</Label>
//                     <Input type="text" id="textName" innerRef={el => setNama(el)} />
//                 </FormGroup>
//                 <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
//                     <Label for="textDescription">Description</Label>
//                     <Input type="text" id="textDescription" innerRef={el => setDeskripsi(el)} />
//                 </FormGroup>
//                 <Row>
//                     <Col>
//                         <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
//                             <Label for="textBrand">Brand</Label>
//                             <Input type="text" id="textBrand" innerRef={el => setBrand(el)} />
//                         </FormGroup>
//                     </Col>
//                     <Col>
//                         <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
//                             <Label for="textCategory">Category</Label>
//                             <Input type="text" id="textCategory" innerRef={el => setCategory(el)} />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
//                     <Label className="mr-5">Stock</Label>
//                     <Button outline color="success" type='button' size="sm" style={{ float: 'right' }} onClick={onBtnAddStock} >Add Stock</Button>
//                     {printStock()}
//                 </FormGroup>
//                 <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
//                     <Label className="mr-5">Image</Label>
//                     {/* <Button outline color="success" type='button' size="sm" style={{ float: 'right' }} onClick={onBtnAddImage} >Add Image</Button> */}
//                     {/* {this.printImage()} */}
//                 </FormGroup>
//                 <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
//                     <Label for="textPrice">Price</Label>
//                     <Input type="text" id="textPrice" innerRef={el => setHarga(el)} />
//                 </FormGroup>
//             </ModalBody>
//             <ModalFooter>
//                 <Button type="submit" color="primary" onClick={onBtnAdd}>Submit</Button>{' '}
//                 {/* <Button color="secondary" onClick={this.onBtnCancel}>Cancel</Button> */}
//             </ModalFooter>
//         </Modal>
//     )
// }