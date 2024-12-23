import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatsItem from '../components/StatsItem';
import SubjectItem from '../components/SubjectItem';
import StepItem from '../components/StepItem';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <section className="hero-section-home">
        <div className="hero-content">
          <h1>Chinh phục tri thức nhanh hơn cùng gia sư của bạn</h1>
          <button className="btn-start">
            <a href="/find-tutor">Bắt đầu &rarr;</a>
          </button>
        </div>
        <img src="/assets/homepage.png" alt="Hero" className="hero-image" />
      </section>

      <section className="stats-section">
        <StatsItem label="Gia sư có kinh nghiệm" value="10.000+" />
        <StatsItem label="Đánh giá gia sư 5 sao" value="300.000+" />
        <StatsItem label="Học sinh" value="12.000+" />
        <StatsItem label="Môn học" value="12+" />
        <StatsItem label="Trên CH Play" value="4.8 ⭐⭐⭐⭐⭐" />
      </section>

      <section className="subject-list">
        <div className="subject-grid">
          <SubjectItem title="Gia sư môn Toán" count="1,519" />
          <SubjectItem title="Gia sư môn Văn" count="963" />
          <SubjectItem title="Gia sư Tiếng Nhật" count="833" />
          <SubjectItem title="Gia sư môn Lý" count="1,416" />
          <SubjectItem title="Gia sư Tiếng Anh" count="2,319" />
          <SubjectItem title="Ôn thi THPTQG" count="1,134" />
          <SubjectItem title="Gia sư môn Hóa" count="1,011" />
          <SubjectItem title="Gia sư Tiếng Trung" count="1,211" />
          <SubjectItem title="Ôn thi ĐGNL" count="1,381" />
        </div>
      </section>

      <section className="steps-section">
        <h2>Cách hoạt động của TutorHub</h2>
        <div className="steps">
          <StepItem
            stepNumber="1"
            title="Tìm gia sư"
            description="Chúng tôi sẽ kết nối bạn đến với một gia sư phù hợp với các tiêu chí của bạn"
            image="/assets/step1.png"
          />
          <StepItem
            stepNumber="2"
            title="Trao đổi với gia sư"
            description="Bạn sẽ chọn gia sư bạn muốn và trao đổi về yêu cầu, hình thức học tập và mức học phí"
            image="/assets/step2.png"
          />
          <StepItem
            stepNumber="3"
            title="Bắt đầu học"
            description="Gia sư sẽ bắt đầu dạy dựa trên yêu cầu của bạn"
            image="/assets/step3.png"
          />
        </div>
      </section>


      <section className="guarantee-section">
        <h2>Đảm bảo hài lòng</h2>
        <p>Tìm kiếm gia sư khác nếu bạn không thấy phù hợp sau buổi học đầu tiên mà không mất phí.</p>
      </section>

      <section className="become-tutor">
        <div className="tutor-image-container">
          <img
            src="/assets/become-tutor.png"
            alt="Become a Tutor"
            className="tutor-image"
          />
        </div>
        <div className="tutor-content">
          <h2>Trở thành gia sư</h2>
          <p>
            Kiếm tiền bằng cách chia sẻ kiến thức của bạn. Đăng ký để bắt đầu dạy học cùng TutorHub.
          </p>
          <ul>
            <li>Kết nối với học sinh</li>
            <li>Phát triển công việc</li>
            <li>Đảm bảo được nhận lương</li>
          </ul>
          <button className="btn-become-tutor">
            <a href="/tutor-register-personal-info">Trở thành gia sư &rarr;</a>
          </button>
          <a href="/help" className="how-it-works">
            Nền tảng TutorHub hoạt động như thế nào?
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;