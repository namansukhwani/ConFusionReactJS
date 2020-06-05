import React from 'react';
import {Navbar, NavbarBrand, Nav ,NavItem,NavbarToggler ,Collapse,  Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen:false
        };
        
    }

    toggleNav()
    {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
            </div>
        );
    }
}

export default Header;