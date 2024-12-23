import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InputField from '../components/InputField';
import '../styles/RegisterPage.css';

const StudentRegisterInfo = () => {
  return (
    <div className="register-page">
      <Navbar />
      <div className="register-container">
        <h1 className="register-title">Thông tin học viên</h1>
        <p className="register-subtitle">
          Đã có tài khoản? <a href="/login" className="login-link">Đăng nhập</a>
        </p>
        <form className="register-form" action="/">
          <div className="form-row">
            <InputField id="name" label="Tên" placeholder="Tên học viên" type="text" />
            <InputField id="cccd" label="CCCD (Nếu có)" placeholder="CCCD" type="text" />
            <InputField id="birth-date" label="Ngày tháng năm sinh" placeholder="Nhập ngày tháng năm sinh" type="date" />
          </div>
          <div className="form-row">
            <InputField id="gender" label="Giới tính" placeholder="Nhập giới tính" type="text" />
            <InputField id="class" label="Lớp" placeholder="Nhập lớp" type="text" />
            <InputField id="school" label="Trường" placeholder="Nhập trường" type="text" />
          </div>
          <div className="form-row">
            <InputField id="address" label="Địa chỉ" placeholder="Địa chỉ" type="text" />
            <InputField id="current-level" label="Trình độ hiện tại" placeholder="Nhập trình độ hiện tại" type="text" />
            <InputField id="goal" label="Mục tiêu" placeholder="Nhập mục tiêu" type="text" />
          </div>
          <button type="submit" className="btn-submit">Đăng ký</button>
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

export default StudentRegisterInfo;