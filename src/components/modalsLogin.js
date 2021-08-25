import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.btClose}>
                    <ModalHeader toggle={this.props.btClose}>Login</ModalHeader>
                    <ModalBody>
                        <FormGroup style={{ padding: '2vw' }}>
                            <Label for="textName">Username</Label>
                            <Input type="text" id="textName" innerRef={elemen => this.inName = elemen} />
                        </FormGroup>
                        <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
                            <Label for="textDescription">Description</Label>
                            <Input type="text" id="textDescription" innerRef={elemen => this.inDescription = elemen} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <FormGroup style={{ padding: '2vw', marginTop: '-6vh' }}>
                            <FormText color="muted" style={{ position:'relative',right:'5vw' }}>
                                Belum Punya Akun ? Daftar disini <Link to="/register">Register</Link>
                            </FormText>
                        </FormGroup>
                        <Button color="primary">Sign In</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Login;