import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/RegisterPersonalInfoPage.css";

const UploadImage = ({ label }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-image">
      <label className="upload-label">{label}</label>
      <div className="upload-box">
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <div className="upload-placeholder">
            <span>+</span>
            <p>CCCD</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="upload-input"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

const RegisterPersonalInfo = () => {
  return (
    <div className="register-page">
      <Navbar />
      <div className="register-container">
        <h1 className="register-title">Đăng ký thông tin cá nhân</h1>
        <p className="register-subtitle">
          Đã có tài khoản? <a href="/login" className="login-link">Đăng nhập</a>
        </p>
        <form className="register-form" action="/personal-register-advance-info">
          <div className="form-row">
            {/* Phần bên trái: Chọn ảnh CCCD */}
            <div className="left-section">
              <UploadImage label="Ảnh CCCD (mặt trước)" />
              <UploadImage label="Ảnh CCCD (mặt sau)" />
            </div>

            {/* Phần bên phải: Nhập thông tin */}
            <div className="right-section">
              <div className="input-group">
                <label htmlFor="name">Tên</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Tên của bạn"
                  className="text-input"
                />
              </div>
              <div className="input-group">
                <label htmlFor="dob">Ngày tháng năm sinh</label>
                <input type="date" id="dob" className="text-input" />
              </div>
              <div className="input-group">
                <label htmlFor="gender">Giới tính</label>
                <select id="gender" className="text-input">
                  <option value="">Giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="hometown">Quê quán</label>
                <input
                  type="text"
                  id="hometown"
                  placeholder="Quê quán"
                  className="text-input"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn-submit">
            Tiếp theo
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

export default RegisterPersonalInfo;
