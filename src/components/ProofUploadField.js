import React, { useState } from 'react';
import '../styles/RegisterPage.css';

const ProofUploadField = ({ id, label, placeholder, multiple = false }) => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]); // Thêm ảnh mới vào danh sách
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index)); // Xóa ảnh khỏi danh sách
  };

  return (
    <div className="upload-image">
      <label className="upload-label" htmlFor={id}>{label}</label>
      <div className="upload-box">
        {images.length > 0 ? (
          <div className="uploaded-images">
            {images.map((image, index) => (
              <div key={index} className="uploaded-image-wrapper">
                <img src={image} alt={`Uploaded ${index + 1}`} className="uploaded-image" />
                <button
                  type="button"
                  className="remove-image-button"
                  onClick={() => handleRemoveImage(index)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="upload-placeholder">
            <span>+</span>
            <p>{placeholder}</p>
          </div>
        )}
        <input
          type="file"
          id={id}
          className="upload-input"
          accept="image/*"
          onChange={handleImageUpload}
          multiple={multiple} // Cho phép upload nhiều ảnh nếu `multiple` là true
        />
      </div>
    </div>
  );
};

export default ProofUploadField;
