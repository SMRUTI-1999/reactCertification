import React,{useEffect, useState} from 'react';
import './Products.css'

function Products() {
    let [expired, setexpired] = useState(true)
    let [lowStock, setLowStock] = useState(true)

    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))

    }, [])

    const handleExpired = () => {
        setexpired(!expired);
    }

    const handleLowStock = () => {
        setLowStock(!lowStock)
    }

    return (
        <div style={{ padding: '10px 100px' }}>
            <h1>Products</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '17%' }}>
                    <h3 style={{ margin: '0px' }}>Filters</h3>
                    <p>Count: {products.length}</p>
                    <div style={{ padding: '5px 0px' }}>
                        <input type="checkbox" checked={expired} value={expired} onChange={handleExpired} />
                        <label htmlFor="">Expired</label>
                    </div>
                    <div style={{ padding: '5px 0px' }}>
                        <input type="checkbox" checked={lowStock} value={lowStock} onChange={handleLowStock} />
                        <label htmlFor="">Low Stock</label>
                    </div>
                </div>
                <div style={{ width: '83%' }}>
                    <table style={{ width: '100%', borderCollapse:'collapse' }}>
                        <tr style={{ textAlign: 'left' }}>
                            <th>id</th>
                            <th>Product Name</th>
                            <th>Product Brand</th>
                            <th>Expiry Date</th>
                            <th>Unit Price</th>
                            <th>Stock</th>
                        </tr>
                        {products.map((e) => {
                            return <tr className='tableRow' style={{ backgroundColor: 'whitesmoke', fontSize: '16px', padding: '10px' }}>
                                <td>{e.id}</td>
                                <td>{e.medicineName}</td>
                                <td>{e.medicineBrand} <br/>{e.orderTime}</td>
                                <td>{e.expiryDate}</td>
                                <td>${e.unitPrice}</td>
                                <td>{e.stock}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Products
