import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ username, balance }) => {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>TutorHub</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/find-tutor">Tìm gia sư</a></li>
          <li><a href="/how-it-works">Cách nền tảng hoạt động</a></li>
          <li><a href="/become-tutor">Trở thành gia sư</a></li>
        </ul>
      </nav>
      <div className="navbar-right">
        <a href="/help" className="help-icon">?</a>
        {username ? (
          <div className="user-info">
            <span className="user-name">{username}</span>
            <span className="user-balance">
              <i className="fas fa-wallet"></i> 
              <span className="balance-amount">{balance} VNĐ</span>
            </span>
          </div>
        ) : (
          <a href="/login" className="btn-login">Đăng nhập &rarr;</a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
