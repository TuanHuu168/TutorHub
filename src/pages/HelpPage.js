import React from 'react';
import '../styles/HelpPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const HelpPage = () => {
  return (
    <div className="help-page">
      <header className="help-header">
        <div className="help-logo">TutorHub</div>
        <a href="/" className="help-link">Đến TutorHub</a>
      </header>
      <section className="help-hero">
        <h1>Chúng tôi có thể giúp gì cho bạn?</h1>
        <div className="help-search">
          <div className="search-wrapper">
            <span className="search-icon bi bi-search"></span>
            <input type="text" placeholder="Tìm kiếm bài viết..." />
          </div>
        </div>
      </section>
      <section className="help-categories">
        <div className="help-card">
          <img src="/assets/student-help.png" alt="Trợ giúp cho học sinh" />
          <h3>Trợ giúp cho học sinh</h3>
          <p>56 bài viết</p>
        </div>
        <div className="help-card">
          <img src="/assets/tutor-help.png" alt="Trợ giúp cho gia sư" />
          <h3>Trợ giúp cho gia sư</h3>
          <p>62 bài viết</p>
        </div>
      </section>
      <footer className="help-footer">
        <h2>TutorHub</h2>
        <p>Preply © 2024</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HelpPage;
