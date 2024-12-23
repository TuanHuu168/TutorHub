import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="login-page">
        <div className="login-container">
          <h1 className="login-title">Đăng nhập</h1>
          <p className="login-subtitle">
            Chưa có tài khoản? <a href="/personal-register-info" className="signup-link">Đăng ký</a>
          </p>
          <form className="login-form" action="/">
            <div className="form-group">
              <label htmlFor="email">Email hoặc Số điện thoại</label>
              <input type="text" id="email" placeholder="Nhập email hoặc số điện thoại của bạn" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input type="password" id="password" placeholder="Nhập mật khẩu" />
            </div>
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <span>Ghi nhớ tài khoản</span>
              </div>
              <a href="/forgot-password" className="forgot-password-link">Quên mật khẩu?</a>
            </div>
            <button type="submit" className="btn-login">Đăng nhập</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
