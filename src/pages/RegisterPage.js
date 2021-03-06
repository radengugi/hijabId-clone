import axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, ButtonToggle, Breadcrumb, BreadcrumbItem, Alert, InputGroupAddon, InputGroup } from 'reactstrap';
import { URL_API } from '../helper';
import { connect } from 'react-redux';
import { authLogin } from '../actions'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passType: 'password',
            passShow: <span className="btn btn-outline-secondary material-icons">visibility</span>,
            alert: false,
            message: '',
            alertType: ''
        }
    }

    onBtnRegis = () => {
        let username = this.inUsername.value
        let email = this.inRegisEmail.value
        let password = this.inRegisPassword.value
        let confPassword = this.inConfPassword.value
        let role = 'user'

        if (username == '' || email == '' || password == '' || confPassword == '') {
            // setState untuk membuka alert, dengan mengatur message serta type alert
            this.setState({ alert: !this.state.alert, message: 'Isi semua form !', alertType: 'danger' })
            // melakukan reset terhadap alert menggunakan setTimeOut
            setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
        } else {
            if (email.includes('@')) {
                axios.get(URL_API + `/users?email=${email}`)
                    .then(res => {
                        if (res.data.length > 0) {
                            this.setState({ alert: !this.state.alert, message: 'Email sudah terdaftar !', alertType: 'success' })
                            setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
                        } else {
                            axios.post(URL_API + '/users', {
                                username,
                                email,
                                password,
                                cart: [],
                                role: 'user',
                            })
                                .then(res => {
                                    this.setState({ alert: !this.state.alert, message: 'Registrasi akun Anda Berhasil !', alertType: 'success' })
                                    setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
                                    this.inUsername.value = null
                                    this.inRegisEmail.value = null
                                    this.inRegisPassword.value = null
                                    this.inConfPassword.value = null
                                })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .catch(err => {
                        console.log("ERROR Register :", err)
                    })
            } else {
                setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
                this.setState({ alert: !this.state.alert, message: 'Email anda salah', alertType: 'warning' })
            }
        }
    }

    onBtnLogin = () => {
        this.props.authLogin(this.inEmail.value, this.inPassword.value)
        // axios.get(URL_API + `/users?email=${this.inEmail.value}&password=${this.inPassword.value}`)
        //     .then(res => {
        //         if (res.data.length > 0) {
        //             // this.props.authLogin(res.data[0])
        //             this.props.authLogin()
        //             // menyimpan data token ke dalam browser
        //             localStorage.setItem('tkn_id', res.data[0].id)
        //             this.setState({ redirect: true })
        //         } else {
        //             this.setState({ alert: !this.state.alert, message: 'Akun tidak ditemukan !', alertType: 'warning' })
        //         }
        //     })
        //     .catch(err => {
        //         console.log("Login Error :", err)
        //     })
    }

    handlePassword = (value) => {
        console.log(this.inRegisPassword.value)

        let huruf = /[a-zA-Z0-9]/
        // let huruf = /[a-z]/i //untuk menonaktifkan sensitive case untuk menghasilkan true
        let numb = /[0-9]/
        // console.log(huruf.test(this.inRegisPassword.value))

        if (huruf.test(this.inRegisPassword.value) || numb.test(this.inRegisPassword.value)) {
            if (huruf.test(this.inRegisPassword.value) && numb.test(this.inRegisPassword.value)) {
                console.log('Huruf & Angka :')
            } else if (huruf.test(this.inRegisPassword.value)) {
                console.log('Hanya huruf :')
            } else if (numb.test(this.inRegisPassword.value)) {
                console.log('Hanya angka :')
            }
        }
    }

    view = () => {
        let { passShow, passType } = this.state
        if (passType === "password") {
            this.setState({ passType: "text", passShow: <span className="btn btn-outline-secondary material-icons">visibility_off</span> })
        } else {
            this.setState({ passType: "password", passShow: <span className="btn btn-outline-secondary material-icons">visibility</span> })
        }
    }

    render() {
        if (this.props.id) {
            return <Redirect to="/" />
        }
        return (
            <div className="container-fluid">
                <div>
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem tag="a" href="#" style={{ color: 'gray', fontSize: '14px' }}>Register</BreadcrumbItem>
                        {/* <BreadcrumbItem tag="a" href="#" style={{ color: 'gray', fontSize: '14px' }}>Access</BreadcrumbItem> */}
                    </Breadcrumb>
                </div>
                <div className="container text-center my-5">
                    <div>
                        <h2 style={{ fontSize: "35px" }}><b>Register</b></h2>
                        <p style={{ fontSize: "14px", marginTop: '4vh' }}>Masuk dan selesaikan pesanan dengan data pribadi Anda atau daftar untuk menikmati semua manfaat memiliki akun Hijab.Id</p>
                    </div>
                    <div className="row no-gutters my-5">
                        <div className="col-md-12">
                            <Form style={{ width: '40vw', margin: 'auto' }}>
                                <Alert isOpen={this.state.alert} color={this.state.alertType}>
                                    {this.state.message}
                                </Alert>
                                <FormGroup className="mt-4">
                                    <Label for="textUsername" style={{ float: 'left', fontSize: '14px' }}>Username</Label>
                                    <span className="required" style={{ float: 'right', color: 'red', fontSize: '20px' }}>*</span>
                                    <Input type="text" id="textUsername" placeholder="Masukkan username Anda ..." innerRef={elemen => this.inUsername = elemen} />
                                </FormGroup>
                                <FormGroup className="mt-4">
                                    <Label for="textEmail" style={{ float: 'left', fontSize: '14px' }}>Email</Label>
                                    <span className="required" style={{ float: 'right', color: 'red', fontSize: '20px' }}>*</span>
                                    <Input type="email" id="textEmail" placeholder="Masukkan alamat email Anda ..." innerRef={elemen => this.inRegisEmail = elemen} />
                                </FormGroup>
                                <FormGroup className="mt-4">
                                    <Label for="textPassword" style={{ float: 'left', fontSize: '14px' }}>Kata Sandi</Label>
                                    <span className="required" style={{ float: 'right', color: 'red', fontSize: '20px' }}>*</span>
                                    <Input type={this.state.passType} onChange={this.handlePassword} id="textPassword" placeholder="Masukkan kata sandi Anda..." innerRef={elemen => this.inRegisPassword = elemen} />
                                </FormGroup>
                                <FormGroup className="mt-4">
                                    <Label for="textConfPassword" style={{ float: 'left', fontSize: '14px' }}>Konfirmasi Kata Sandi</Label>
                                    <span className="required" style={{ float: 'right', color: 'red', fontSize: '20px' }}>*</span>
                                    <Input type={this.state.passType} id="textConfPassword" placeholder="Masukkan kata sandi Anda..." innerRef={elemen => this.inConfPassword = elemen} />
                                </FormGroup>
                                <FormGroup>
                                    <ButtonToggle color="primary" style={{ marginTop: '6vh' }} block onClick={this.onBtnRegis}>Masuk</ButtonToggle>{' '}
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;