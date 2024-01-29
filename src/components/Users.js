import React, {useState, useEffect} from 'react';
import './Users.css'

function Users() {

    let [users, setUsers] = useState([])
    let [name, setName] = useState('')

    useEffect(() => {
        fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users')
            .then(response => response.json())
            .then(data => setUsers(data))

    }, [])

    const handleReset = ()=>{
        setName('')
    }

  return (
    <div style={{ padding: '10px 100px' }}>
            <h1>Users</h1>
                <div style={{ width: '100%' }}>
                    <div style={{padding:'25px 0px'}}>
                        <input type="text" value={name} placeholder='Search by Name' style={{fontSize:'18px', padding:'10px 20px', width:'40%', letterSpacing:'1px', borderBottom:'2px solid #888888', borderTop:'0px solid', borderLeft:'0px solid', borderRight:'0px solid'}} onChange={(e)=> setName(e.target.value)} />
                        <button onClick={handleReset} style={{fontSize:'14px', padding:'12px 35px', margin:'0px 15px', backgroundColor:'#20b883', color:'white', border:'0px solid', borderRadius:'22px', cursor:'pointer'}}>Reset</button>
                    </div>
                    <table style={{ width: '100%', borderCollapse:'collapse' }}>
                        <tr style={{ textAlign: 'left' }}>
                            <th>id</th>
                            <th>User Avatar</th>
                            <th>Full Name</th>
                            <th>DoB</th>
                            <th>Gender</th>
                            <th>Current Location</th>
                        </tr>
                        {users.map((e) => {
                            return <tr className='tableRow' style={{ backgroundColor: 'whitesmoke', fontSize: '16px', padding: '10px' }}>
                                <td>{e.id}</td>
                                <td><img src={e.profilePic} alt="" /></td>
                                <td>{e.fullName}</td>
                                <td>{e.dob}</td>
                                <td>{e.gender}</td>
                                <td>{e.currentCity}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
  )
}

export default Users
