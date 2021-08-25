import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import Login from './modalsLogin';
import { authLogin } from "../actions";
import axios from 'axios';
import { URL_API } from '../helper';

class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'rgba(230, 142, 195, 0.3)' }}>
                <div className="container">
                    <Navbar className="ml-auto" light expand="md">
                        <Link to="/"><img src="https://hijab.id/tm_design/logo.png" style={{ width: '120px' }} /></Link>
                        <button className="navbar-toggler" type="button" style={{ backgroundColor: 'rgba(230, 142, 195, 0.3)' }} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="material-icons">menu</span>
                        </button>
                        <Collapse className="collapse" id="navbarSupportedContent" isOpen={this.state.buka} navbar>
                            <Nav className="mr-auto mx-3" navbar>
                                <NavItem style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    <Link className="nav-link" to="/new-arrival">
                                        NEW ARRIVAL
                                    </Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                        HIJAB
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/hijab-instan">
                                                Hijab Instan
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/plain-hijab-pashmina">
                                                Plain Hijab Pashmina
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/plain-hijab-square">
                                                Plain Hijab Square
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/printed-pashmina">
                                                Printed Pashmina
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/syari-hijab">
                                                Syar'i Hijab
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                        APPARELS
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/apparels-bottoms">
                                                Bottoms
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/apparels-dress">
                                                Dress
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/apparels-homewear">
                                                Homewear
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/apparels-sets-topbottoms">
                                                Sets (Top & Bottom)
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/apparels-tops">
                                                Tops
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                        ACCESSORIES
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/accessories-bandana-rajut">
                                                Bandana Rajut
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/accessories-headloop-mask">
                                                Headloop Mask
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link" to="/accessories-legging-wudhu">
                                                Legging Wudhu
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    <Link className="nav-link" to="/contact">
                                        CONTACT US
                                    </Link>
                                </NavItem>
                                <NavItem style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    <Link className="nav-link" to="/product-management">
                                        Product Management
                                    </Link>
                                </NavItem>
                            </Nav>
                            <UncontrolledDropdown>
                                <DropdownItem className="btn" nav caret onClick={() => this.setState({ modal: !this.state.modal })}
                                    style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    Login
                                </DropdownItem>
                                <Login modal={this.state.modal} btClose={() => this.setState({ modal: !this.state.modal })} />
                            </UncontrolledDropdown>
                            {
                                this.props.username ?
                                    <UncontrolledDropdown>
                                        <DropdownToggle nav caret style={{ color: 'gray' }}>
                                            Hello, {this.props.username}
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            {
                                                this.props.role == "user" ?
                                                    <>
                                                        <DropdownItem>
                                                            Profile
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            Cart
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            History
                                                        </DropdownItem>
                                                    </> :
                                                    <>
                                                        <DropdownItem>
                                                            <Link to="/product-management" style={{ textDecoration: 'none', color: 'gray' }}>
                                                                Product Management
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            Transaction Management
                                                        </DropdownItem>
                                                    </>
                                            }
                                            <DropdownItem divider />

                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    :
                                    null
                            }
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default NavbarComp;