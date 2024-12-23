import React from 'react';

const StepItem = ({ stepNumber, title, description, image }) => {
  return (
    <div className="step-item">
      <div className="step-header">
        <div className="step-number">{stepNumber}</div>
      </div>
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
      {image && <img src={image} alt={title} className="step-image" />}
    </div>
  );
};

export default StepItem;
