import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(props) {


    const navigate = useNavigate();


    props.isLoggedin && navigate('/orders')

    return (
        <>
            <div className='loginBody'>
                <h1 style={{ fontSize: '38px', fontWeight: '600', margin: '15px 0px', letterSpacing: '1px' }}>Sign In</h1>
                <form action="">
                    <div style={{ margin: '20px 0px', borderBottom: '1px solid #888888', fontWeight: '400' }}>
                        <input onChange={(e) => props.setUsername(e.target.value)} type='text' placeholder='Enter Username' required value={props.username} style={{ width: '100%', border: '0px solid', padding: '5px' }} />
                    </div>
                    <div style={{ margin: '20px 0px', borderBottom: '1px solid #888888', fontWeight: '400' }}>
                        <input onChange={(e) => props.setPassword(e.target.value)} type='password' placeholder='Enter Password' required value={props.password} style={{ width: '100%', border: '0px solid', padding: '5px' }} />
                    </div>
                    <button type='submit' style={{ width: '100%', backgroundColor: '#20b883', display: 'inline-block', borderRadius: '30px', padding: '14px 36px', fontSize: '12px', fontWeight: '500', letterSpacing: '1px', color: 'white', margin: '24px 0px', border: '0px solid', cursor: 'pointer' }} onClick={props.fun}>Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
