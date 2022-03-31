import './user_detail.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetail(props) {
  const [data, setData] = useState({});
  const [mode, setMode] = useState('ADD');

  useEffect(() => {
    debugger;
    const id = window.location.search.slice(1);
    if(id) {
      setMode('UPD');
      axios.get('http://localhost:3003/api/users/edit/'+id)
          .then(res => setData(res.data));
    }
  },[]);

  const saveData = () => {
    if(mode === 'ADD') {
      axios.post('http://localhost:3003/api/users/addUser', data)
        .then(res => window.location.replace('http://localhost:3000/users'));
    } else {
      const id = window.location.search.slice(1);
      axios.patch('http://localhost:3003/api/users/edit/'+id,  data)
      .then(res => window.location.replace('http://localhost:3000/users'));
    }
  };

  const handleChange = (e) => {
    const {name:key , value} = e.target;
    setData({...data, [key] : value})
  }

  return (
    <form>
      <ul className="form-style-1">
        <li>
          <label>Full Name <span className="required">*</span></label>
          <input type="text" name="firstName" value={data.firstName} className="field-divided" placeholder="First" onChange={handleChange}/>  <input type="text" name="lastName" value={data.lastName} className="field-divided" placeholder="Last" onChange={handleChange}/></li>
        <li>
            <label>Gender</label>
            <select name="gender" className="field-select" onChange={handleChange} value={data.gender}>
                <option value="male">Male</option>
                <option value="femal">Female</option>
            </select>
        </li>
        <li>
            <label>DOB <span className="required">*</span></label>
            <input type="date" name="dateOfBirth" value={data.dateOfBirth ? data.dateOfBirth.split('T')[0] : ''} className="field-long" onChange={handleChange}/>
        </li>
        <li>
            <label>Email <span className="required">*</span></label>
            <input type="text" name="email" value={data.email} className="field-long" onChange={handleChange}/>
        </li>
        <li>
            <label>Mobile <span className="required">*</span></label>
            <input type="text" name="mobile" value={data.mobile} className="field-long" onChange={handleChange}/>
        </li>
        <li>
            <label>Address <span className="required">*</span></label>
            <textarea name="address" id="field5" value={data.address} className="field-long field-textarea" onChange={handleChange}></textarea>
        </li>
        <li>
            <input type="button" value="Submit" onClick={saveData}/>
        </li>
      </ul>
    </form>
  );
}

export default UserDetail;
