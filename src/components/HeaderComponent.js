import React from 'react';
import {Navbar, NavbarBrand, Nav ,NavItem,NavbarToggler ,Collapse,  Jumbotron, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../App.css';

class Header extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);

        this.state={
            isNavOpen:false,
            isModalOpen:false
        };
        
    }

    toggleModal()
    {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNav()
    {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleLogin(event)
    {
        this.toggleModal();
        alert("Username: "+this.username.value+"  Password : "+this.password.value+" Remember: "+this.remember.value);
        event.preventDefault();
    }

    render()
    {
        return(
            <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand href="/home " className="ml-auto mr-md-auto ">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem ><NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home </NavLink> </NavItem>
                            <NavItem ><NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span>About</NavLink> </NavItem>
                            <NavItem ><NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu </NavLink> </NavItem>
                            <NavItem ><NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span>Contact </NavLink> </NavItem>
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in"></span>Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-md-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                        <div className="col-12 col-md-6" ></div>
                    </div>
                </div>
            </Jumbotron> 

            {/*--Modal for login -- */}
            <Modal id="loginModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label  htmlFor="username">Username</Label>
                            <Input  type="text" 
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            innerRef={(input) =>this.username =input }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label  htmlFor="password">Password</Label>
                            <Input  type="password" 
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            innerRef={(input) =>this.password =input }/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input  type="checkbox" 
                            id="remember"
                            name="remeber"
                            innerRef={(input) =>this.remember =input }/>{' '}
                            <strong>Remember me</strong>
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
        );
    }
}

export default Header;