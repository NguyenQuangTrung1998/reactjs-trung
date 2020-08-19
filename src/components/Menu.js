import React, { Component } from 'react';
import './Menu.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import searchItem from '../images/search.svg'
  
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:true
        }
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
   
 render(){
  return (
   <Router>
        <div className="Menu">
            <div className="auth">
                <div className="logo">logo</div>
                <Link className="dk" to='/'>Đăng kí</Link>
                <Link className="dn" to='/'>Đăng nhập</Link>
                </div>
                    <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">NQT</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink>
                            <Link style={{
                                color:"rgba(255,255,255,.5)",
                                textDecoration:"none"
                            }} to="/">giới thiệu</Link>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink>
                            <Link style={{
                                color:"rgba(255,255,255,.5)",
                                textDecoration:"none"
                            }} to='/'>sản phẩm bán chạy</Link>
                        </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            danh mục sản phẩm
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            giày converse
                            </DropdownItem>
                            <DropdownItem>
                            giày nike
                            </DropdownItem>
                            <DropdownItem>
                            giày adidas
                            </DropdownItem>
                            <DropdownItem>
                            giày new balance
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    
                    </Nav>
                    <Nav>
                    <NavItem>
                        <NavLink>
                            <Link>giỏ hàng</Link>
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <Nav>
                    <NavItem color="dark">
                        <div className="searchItem"> 
                        <input type="text" 
                        name="search" 
                        placeholder="tìm sản phẩm của bạn" />
                        <img className="search" src={searchItem} alt="search"/>
                        </div>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
        </div>
   </Router>
  );
 }
}

export default Menu;
