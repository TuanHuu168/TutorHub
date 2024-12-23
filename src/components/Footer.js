import React from 'react';
import '../styles/Footer.css';

const FooterSection = ({ title, children }) => {
  return (
    <div className="footer-section">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterSection title="VỀ CHÚNG TÔI">
          <ul>
            <li><a href="#">Chúng tôi là ai</a></li>
            <li><a href="#">Cách thức hoạt động</a></li>
            <li><a href="#">Đánh giá về TutorHub</a></li>
            <li><a href="#">Ứng dụng TutorHub</a></li>
            <li><a href="#">Làm việc tại TutorHub!</a></li>
            <li><a href="#">Nghiên cứu và phát triển</a></li>
          </ul>
        </FooterSection>

        <FooterSection title="DÀNH CHO HỌC VIÊN">
          <ul>
            <li><a href="#">Blog của TutorHub</a></li>
            <li><a href="#">Câu hỏi và trả lời</a></li>
            <li><a href="#">Giảm giá cho học viên</a></li>
            <li><a href="#">Giới thiệu bạn bè</a></li>
          </ul>
        </FooterSection>

        <FooterSection title="DÀNH CHO GIA SƯ">
          <ul>
            <li><a href="#">Trở thành gia sư trực tuyến</a></li>
            <li><a href="#">Dạy Toán trực tuyến</a></li>
            <li><a href="#">Dạy Vật Lý trực tuyến</a></li>
            <li><a href="#">Dạy Tiếng Anh trực tuyến</a></li>
          </ul>
        </FooterSection>

        <FooterSection title="GIA SƯ Ở GẦN BẠN">
          <ul>
            <li><a href="#">Gia sư ở Hà Nội</a></li>
            <li><a href="#">Gia sư ở TP Hồ Chí Minh</a></li>
            <li><a href="#">Gia sư ở Đà Nẵng</a></li>
            <li><a href="#">Gia sư ở Hải Phòng</a></li>
            <li><a href="#">Gia sư ở Huế</a></li>
            <li><a href="#">Gia sư quốc tế</a></li>
            <li><a href="#">Gia sư theo thành phố</a></li>
          </ul>
        </FooterSection>

        <FooterSection title="HỖ TRỢ">
          <ul>
            <li><a href="#">Cần giúp đỡ?</a></li>
          </ul>
        </FooterSection>

        <FooterSection title="LIÊN HỆ">
          <p>Đống Đa, Hà Nội</p>
        </FooterSection>

        <FooterSection title="MẠNG XÃ HỘI CỦA TUTORHUB">
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </FooterSection>

        <FooterSection title="ỨNG DỤNG">
          <div className="app-icons">
            <img src="/assets/appstore.png" alt="App Store" />
            <img src="/assets/googleplay.png" alt="Google Play" />
          </div>
        </FooterSection>
      </div>

      <div className="footer-bottom">
        &copy; 2024 TutorHub Inc. | <a href="#">Trung tâm pháp lý</a> | <a href="#">Chính sách bảo mật</a> | <a href="#">Chính sách Cookie</a>
      </div>
    </footer>
  );
};

export default Footer;
