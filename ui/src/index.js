import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserList from './userList';
import UserDetail from './userDetail';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/users" element={<UserList />} />
      <Route path="/users/add" element={<UserDetail />} />
      <Route path="/users/edit" element={<UserDetail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
