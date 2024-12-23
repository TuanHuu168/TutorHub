import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StepItemTutor from '../components/StepItemTutor';
import FAQItem from '../components/FAQItem';
import '../styles/BecomeTutorPage.css';

const BecomeTutorPage = () => {
  const steps = [
    { step: '1', title: 'Đăng ký', description: 'Điền hồ sơ của bạn' },
    { step: '2', title: 'Duyệt hồ sơ', description: 'Trong thời gian 1 - 3 ngày' },
    { step: '3', title: 'Bắt đầu kiếm tiền', description: 'Giảng dạy và chia sẻ kiến thức' },
  ];

  const faqs = [
    'TutorHub tìm kiếm gia sư có đặc điểm như thế nào?',
    'Tôi có thể dạy môn học nào?',
    'Làm thế nào để trở thành gia sư của TutorHub?',
    'Làm thế nào để hồ sơ của tôi được duyệt nhanh chóng?',
    'Lý do tôi nên chọn TutorHub?',
    'Tạo hồ sơ trên TutorHub có mất phí không?',
    'Có những hình thức gia sư nào?',
    'Tôi có thể kiếm bao nhiêu từ TutorHub?',
  ];

  return (
    <div className="become-tutor-page">
      <Navbar />

      {/* Hero Section */}
      <section className="tutor-hero-section">
        <div className="become-tutor-hero-content">
          <h1>Trở thành gia sư và kiếm tiền từ việc giảng dạy kiến thức cho mọi người</h1>
          <div className="steps">
            {steps.map((item, index) => (
              <StepItemTutor
                key={index}
                step={item.step}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <a href="/tutor-register-education" className="btn-primary">Tạo hồ sơ ngay bây giờ</a>
        </div>
        <img src="/assets/become-tutor-2.png" alt="Become Tutor" className="hero-image" />
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefit">
          <h3>Chi phí hợp lý</h3>
          <p>Chi phí ít hơn so với các trung tâm môi giới hiện nay giúp gia sư trả ít phí trung gian.</p>
        </div>
        <div className="benefit">
          <h3>Đảm bảo được nhận lương</h3>
          <p>Nền tảng đảm bảo bạn sẽ được trả lương đủ sau buổi dạy bằng cách thu học phí trực tuyến.</p>
        </div>
        <div className="benefit">
          <h3>Tiếp cận với nhiều học sinh</h3>
          <p>Nền tảng trực tuyến không giới hạn bởi khoảng cách địa lý, phù hợp với mọi trình độ.</p>
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <div className="connect-content">
          <h2>Kết nối với học viên ở mọi nơi</h2>
          <ul>
            <li>Đảm bảo thanh toán</li>
            <li>Số lượng học viên ổn định</li>
            <li>Chi phí trung gian thấp</li>
            <li>Đội ngũ hỗ trợ trực tuyến</li>
          </ul>
          <a href="/tutor-register-education" className="btn-primary">Tạo hồ sơ ngay bây giờ</a>
        </div>
        <img src="/assets/connect-students.png" alt="Connect Students" className="connect-image" />
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Câu hỏi thường gặp</h2>
        <div className="faq-list">
          {faqs.map((question, index) => (
            <FAQItem key={index} question={question} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeTutorPage;
