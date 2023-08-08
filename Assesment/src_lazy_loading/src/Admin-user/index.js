import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminUser from './AdminUser';

ReactDOM.render(
  <Router>
  <AdminUser />
  </Router>,
  document.getElementById('admin-user-root')
);
