import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/TutorCard.css';

const TutorCard = ({
  image,
  name,
  isSuperTutor,
  rating,
  reviews,
  price,
  subjects,
  students,
  introLink,
  moreLink,
  onRegister, // Callback từ FindTutorPage
}) => {
  const [isEnrolled, setIsEnrolled] = useState(false); // Trạng thái đăng ký

  const handleEnrollClick = () => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn đăng ký lớp này?',
      text: `Bạn sẽ đăng ký lớp của gia sư ${name} với chi phí ${price.toLocaleString()} VND.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý, đăng ký!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        const isSuccess = onRegister(price); // Gọi callback để kiểm tra và xử lý
        if (isSuccess) {
          Swal.fire('Đã đăng ký!', 'Bạn đã đăng ký lớp thành công.', 'success');
          setIsEnrolled(true); // Cập nhật trạng thái
        } else {
          Swal.fire(
            'Số dư không đủ!',
            `Bạn cần ít nhất ${price.toLocaleString()} VNĐ để đăng ký lớp này.`,
            'error'
          );
        }
      }
    });
  };

  return (
    <div className="tutor-card">
      <div className="tutor-card-left">
        <img src={image} alt={name} className="tutor-image" />
      </div>
      <div className="tutor-card-center">
        <div className="tutor-header">
          <h3 className="tutor-name">{name}</h3>
          {isSuperTutor && <span className="super-tutor">Super Tutor</span>}
        </div>
        <div className="tutor-info">
          <p><strong>Trường học:</strong> Đại học XYZ</p>
          <p>
            <strong>Đang dạy:</strong> {students.current} học viên • Đã dạy{' '}
            {students.total} học viên
          </p>
          <p><strong>Môn học:</strong> {subjects.join(', ')}</p>
        </div>
        <div className="tutor-links">
          <a href={introLink} className="intro-link">Giới thiệu</a>
          <a href={moreLink} className="more-link">Xem thêm</a>
        </div>
      </div>
      <div className="tutor-card-right">
        <div className="rating-price">
          <div className="rating">
            ⭐ {rating} ({reviews} đánh giá)
          </div>
          <div className="price">{price.toLocaleString()} VND / 1 giờ dạy</div>
        </div>
        <button className="contact-button">Liên hệ</button>
        <button
          className="enroll-button"
          onClick={handleEnrollClick}
          disabled={isEnrolled} // Vô hiệu hóa nút nếu đã đăng ký
        >
          {isEnrolled ? 'Đã đăng ký' : 'Đăng ký lớp'}
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
