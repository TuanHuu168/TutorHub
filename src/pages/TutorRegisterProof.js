import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProofUploadField from '../components/ProofUploadField';
import '../styles/RegisterProofPage.css';

const TutorRegisterProof = () => {
  return (
    <div className="register-page">
      <Navbar />
      <div className="register-container">
        <h1 className="register-title">Gia sư đăng ký</h1>
        <p className="register-subtitle">
          Đã có tài khoản? <a href="/login" className="login-link"> Đăng nhập</a>
        </p>
        <h2 className="section-title">Minh chứng</h2>
        <form className="register-form">
          <div className="proof-row">
            <ProofUploadField
              id="student-id"
              label="Thẻ sinh viên"
              placeholder="Thẻ sinh viên/Giấy xác nhận sinh viên"
            />
            <ProofUploadField
              id="other-docs"
              label="Giấy tờ khác (có công chứng)"
              placeholder="VD: Giải thưởng, Giấy chứng nhận,..."
              multiple={true} // Cho phép upload nhiều ảnh
            />
          </div>
          <button type="submit" className="btn-submit">Đăng ký</button>
        </form>
        <p className="terms">
          Bằng cách nhấp vào nút Đăng ký bạn đồng ý với
          <a href="/terms" className="terms-link"> điều khoản sử dụng </a>
          và <a href="/privacy" className="terms-link">chính sách bảo mật</a> của TutorHub.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TutorRegisterProof;
