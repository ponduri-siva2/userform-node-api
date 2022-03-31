import {useState, useEffect} from 'react';
import axios from 'axios';

function UserList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        axios.get('http://localhost:3003/api/users')
        .then(res => setData(res.data));
    };

    const handleUpdate = (userId) => {
        window.location.replace('http://localhost:3000/users/edit?'+userId);
    }

    const handleDelete = (userId) => {
        axios.delete('http://localhost:3003/api/users/'+userId)
        .then(() => loadData());
    }

    const headers = ['#', 'Name', 'Gender', 'Date of Birth', 'Email ID', 'Phone Number', 'Address','Action']
    return (
        <div id="root">
            <input id="btn_add" type="button" value = "Add" className="btn btn-primary" onClick={() => {
                window.location.replace('http://localhost:3000/users/add');
            }}/>
        <table className="table table-striped">
            <thead >
                <tr>
                    {headers.map((val, idx) => 
                        <th scope="col" key={idx}>{val}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map((colData, idx) => 
                    <tr>
                        <td>{idx+1}</td>
                        <td>{colData.firstName +' '+colData.lastName}</td>
                        <td>{colData.gender}</td>
                        <td>{new Date(colData.dateOfBirth).toLocaleDateString()}</td>
                        <td>{colData.email}</td>
                        <td>{colData.mobile}</td>
                        <td>{colData.address}</td>
                        <td>
                            {/* <button type="button" className="btn btn-danger" onClick={() => handleChange(colData._id)}>Delete</button> */}
                            <button className="btn btn-primary tool-btn" onClick={() => handleUpdate(colData._id)}><i className="fa fa-edit "></i></button>
                            <button className="btn btn-danger tool-btn" onClick={() => handleDelete(colData._id)}><i className="fa fa-trash"></i></button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    );
}

export default UserList;