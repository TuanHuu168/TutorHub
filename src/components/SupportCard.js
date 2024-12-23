import React from 'react';
import '../styles/SupportCard.css';

const SupportCard = () => {
  return (
    <div className="support-card">
      <img src="/assets/support.png" alt="Support" className="support-image" />
      <h3>Bạn đang cần tư vấn?</h3>
      <p>
        Điền thông tin vào biểu mẫu và tư vấn viên của chúng tôi sẽ liên hệ với bạn cùng danh sách gia sư phù hợp.
      </p>
      <button className="btn-support">Tìm gia sư</button>
      <p>
        Hoặc gọi <a href="tel:19001900">1900 1900</a> để kết nối với tư vấn viên.
      </p>
    </div>
  );
};

export default SupportCard;
