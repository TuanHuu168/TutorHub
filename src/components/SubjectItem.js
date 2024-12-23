import React from 'react';

const SubjectItem = ({ title, count }) => {
  return (
    <div className="subject-item">
      <div className="icon">
        <i className="bi bi-book"></i> {/* Bootstrap Icon */}
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{count} gia sư</p>
      </div>
      <div className="arrow">
        <i className="bi bi-chevron-right"></i> {/* Bootstrap Arrow Icon */}
      </div>
    </div>
  );
};

export default SubjectItem;
