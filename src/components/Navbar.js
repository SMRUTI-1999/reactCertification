import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar(props) {

    const navigate = useNavigate()

    const handleLogout = ()=>{
        navigate('/')
    }

    return (
        <>
            <nav style={{ padding: '0px 48px', boxShadow: '0px 3px 3px #888888' }}>
                <ul style={{ display: 'flex', justifyContent: 'space-between', margin: '0px', alignItems: 'center' }}>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="logo" style={{ height: '30px', padding: '14px 0px' }} />
                        <h1 style={{ display: 'inline-block', margin: '0px', padding: '14px 10px', fontSize: '26px', fontWeight: '600' }}>Kafene</h1>
                        <ul className='navItems' id='nav-items' style={{ display: 'flex' }}>
                            <li>
                                <Link to="/orders" style={{color:'black', textDecoration:'none'}}>Orders</Link>
                            </li>
                            <li>
                                <Link to="/products" style={{color:'black', textDecoration:'none'}}>Products</Link>
                            </li>
                            <li>
                                <Link to="/users" style={{color:'black', textDecoration:'none'}}>Users</Link>
                            </li>
                        </ul>
                    </li>
                    {props.status === true ? <li style={{ display: 'inline-block', fontSize: '14px', fontWeight: '500', cursor:'pointer' }} onClick={handleLogout}>Logout
                    </li>: <li style={{ display: 'none', fontSize: '14px', fontWeight: '500', cursor:'pointer' }} onClick={handleLogout}>Logout
                    </li>}
                </ul>
            </nav>
            {/* <Login/> */}
        </>
    )
}

export default Navbar
