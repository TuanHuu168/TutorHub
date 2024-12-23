import React from 'react';
import '../styles/StepItemTutor.css';

const StepItemTutor = ({ step, title, description }) => {
  return (
    <div className="tutor-step-item">
      <div className="tutor-step-circle">{step}</div>
      <div className="tutor-step-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StepItemTutor;
