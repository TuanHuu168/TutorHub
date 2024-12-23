import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/RegisterAdvancePersonalInfo.css";

const RegisterAdvancePersonalInfo = () => {
  return (
    <div className="register-advance-page">
      <Navbar />
      <div className="register-advance-container">
        <h1 className="register-advance-title">Đăng ký thông tin cá nhân</h1>
        <p className="register-advance-subtitle">
          Đã có tài khoản? <a href="/login" className="login-link">Đăng nhập</a>
        </p>
        <form className="register-advance-form" action="/signup">
          <div className="form-row">
            {/* Hàng đầu tiên */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Nhập email"
                className="text-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                placeholder="Nhập mật khẩu"
                className="text-input"
              />
            </div>
          </div>

          {/* Hàng thứ hai */}
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="text"
                id="phone"
                placeholder="Số điện thoại"
                className="text-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Nhập lại mật khẩu"
                className="text-input"
              />
            </div>
          </div>

          {/* Hàng thứ ba */}
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="address">Địa chỉ hiện tại</label>
              <input
                type="text"
                id="address"
                placeholder="Địa chỉ hiện tại"
                className="text-input"
              />
            </div>

          </div>

          <button type="submit" className="btn-submit">
            Đăng ký
          </button>
        </form>
        <p className="terms">
          Bằng cách nhấp vào nút Đăng ký, bạn đồng ý với
          <a href="/terms" className="terms-link"> điều khoản sử dụng </a>
          và <a href="/privacy" className="terms-link">chính sách bảo mật</a> của TutorHub.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterAdvancePersonalInfo;
