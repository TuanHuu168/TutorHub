import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InputField from '../components/InputField';
import '../styles/RegisterPage.css';

const TutorRegisterEducationLevelPage = () => {
  return (
    <div className="register-page">
      <Navbar />
      <div className="register-container">
        <h1 className="register-title">Gia sư đăng ký</h1>
        <p className="register-subtitle">
          Đã có tài khoản? <a href="/login" className="login-link">Đăng nhập</a>
        </p>
        <h2 className="section-title">Trình độ học vấn</h2>
        <form className="register-form" action="/tutor-register-proof">
          <div className="form-row">
            <InputField id="user-type" label="Bạn là?" placeholder="Sinh viên/Người đi làm..." type="text" />
            <InputField id="subject" label="Môn học có thể dạy" placeholder="Nhập môn học" type="text" />
            <InputField id="region" label="Khu vực dạy học" placeholder="Nhập khu vực" type="text" />
          </div>
          <div className="form-row">
            <InputField id="school" label="Trường đang học" placeholder="Nhập tên trường" type="text" />
            <InputField id="experience" label="Kinh nghiệm gia sư" placeholder="Nhập kinh nghiệm" type="text" />
            <InputField id="teaching-time" label="Thời gian có thể dạy" placeholder="Nhập thời gian" type="text" />
          </div>
          <div className="form-row">
            <InputField id="major" label="Ngành học" placeholder="Nhập ngành học" type="text" />
            <InputField id="voice" label="Giọng nói (Bắc/ Trung/ Nam)" placeholder="Giọng nói có thể dùng để dạy học" type="text" />
            <InputField id="fee" label="Học phí" placeholder="Nhập học phí" type="text" />
          </div>
          <button type="submit" className="btn-submit">Tiếp tục</button>
        </form>
        <p className="terms">
          Bằng cách nhấp vào nút Tiếp tục bạn đồng ý với
          <a href="/terms" className="terms-link"> điều khoản sử dụng </a>
          và <a href="/privacy" className="terms-link">chính sách bảo mật</a> của TutorHub.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TutorRegisterEducationLevelPage;