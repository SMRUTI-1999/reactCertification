import React, { useState, useEffect } from 'react';
import './Orders.css'

function Orders() {
    let [New, setNew] = useState(true)
    let [packed, setPacked] = useState(true)
    let [intransit, setIntransit] = useState(true)
    let [delivered, setDelivered] = useState(true)

    let [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
        .then(response => response.json())
        .then(data => setOrders(data))

    },[New, packed, intransit, delivered])

    const handleNew = () => {
        setNew(!New);
    }

    const handlePacked = () => {
        setPacked(!packed)
    }

    const handleIntransit = () => {
        setIntransit(!intransit)
    }

    const handleDelivered = () => {
        setDelivered(!delivered)
    }

    return (
        <div style={{ padding: '10px 100px' }}>
            <h1>Orders</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '17%' }}>
                    <h3 style={{ margin: '0px' }}>Filters</h3>
                    <p>Count: {orders.length}</p>
                    <div style={{ padding: '5px 0px' }}>
                        <input type="checkbox" checked={New} value={New} onChange={handleNew} />
                        <label htmlFor="">New</label>
                    </div>
                    <div style={{ padding: '5px 0px' }}>
                        <input type="checkbox" checked={packed} value={packed} onChange={handlePacked} />
                        <label htmlFor="">Packed</label>
                    </div>
                    <div style={{ padding: '5px 0px' }}>
                        <input type="checkbox" checked={intransit} value={intransit} onChange={handleIntransit} />
                        <label htmlFor="">Intransit</label>
                    </div>
                    <div style={{ padding: '5px 0px' }}>
                        <input type="checkbox" checked={delivered} value={delivered} onChange={handleDelivered} />
                        <label htmlFor="">Delivered</label>
                    </div>
                </div>
                <div style={{ width: '83%' }}>
                    <table style={{width:'100%', borderCollapse:'collapse'}}>
                        <tr style={{textAlign:'left'}}>
                            <th>id</th>
                            <th>customer</th>
                            <th>date</th>
                            <th>amount</th>
                            <th>status</th>
                        </tr>
                        {orders.map((e)=>{
                            return <tr className='tableRow' style={{backgroundColor:'whitesmoke', fontSize:'16px', padding:'10px'}}>
                                <td>{e.id}</td>
                                <td>{e.customerName}</td>
                                <td>{e.orderDate} <br/>{e.orderTime}</td>
                                <td>{e.amount}</td>
                                <td>{e.orderStatus}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders
