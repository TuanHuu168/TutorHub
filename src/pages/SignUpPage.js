import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUpOption from '../components/SignUpOption';
import '../styles/SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <Navbar />
      <div className="sign-up-container">
        <h1 className="sign-up-title">Đăng ký</h1>
        <div className="sign-up-options">
          <SignUpOption
            image="/assets/student-signup.png"
            title="Bạn cần tìm gia sư"
            link="/student-register-info"
          />
          <SignUpOption
            image="/assets/tutor-signup.png"
            title="Bạn là gia sư"
            link="/tutor-register-education"
          />
        </div>
        <div className="sign-up-help">
          <p>
            Bạn cần giúp đỡ? Liên hệ với chúng tôi qua số{' '}
            <a href="tel:19001900" className="contact-link">
              1900 1900
            </a>{' '}
            hoặc{' '}
            <a href="mailto:support@tutorhub.com" className="contact-link">
              email
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;