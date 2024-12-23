import React, { useState } from 'react';
import '../styles/SearchFilter.css';

const SearchFilter = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    classes: [],
    subject: '',
    location: '',
    time: '',
    level: '',
    school: '',
    salary: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="search-filter-container">
      {/* Phần cơ bản */}
      <div className="search-filter">
        <div className="filter-group">
          <label>Lớp</label>
          <select
            value={filters.classes}
            onChange={(e) =>
              handleFilterChange(
                'classes',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
          >
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Môn học</label>
          <select
            value={filters.subject}
            onChange={(e) => handleFilterChange('subject', e.target.value)}
          >
            <option value="">Chọn môn học</option>
            <option value="Toán">Toán</option>
            <option value="Văn">Văn</option>
            <option value="Tiếng Anh">Tiếng Anh</option>
            <option value="Lý">Lý</option>
            <option value="Hóa">Hóa</option>
            <option value="Sinh">Sinh</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Khu vực</label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">Chọn khu vực</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Thời gian học</label>
          <select
            value={filters.time}
            onChange={(e) => handleFilterChange('time', e.target.value)}
          >
            <option value="">Chọn thời gian</option>
            <option value="T2, T5">T2, T5</option>
            <option value="T3, T6">T3, T6</option>
          </select>
        </div>
      </div>

      {/* Phần nâng cao */}
      <div className="search-filter-advanced">
        <div className="filter-group">
          <label>Trình độ</label>
          <select
            value={filters.level}
            onChange={(e) => handleFilterChange('level', e.target.value)}
          >
            <option value="">Chọn trình độ</option>
            <option value="Cử nhân">Cử nhân</option>
            <option value="Thạc sĩ">Thạc sĩ</option>
            <option value="Tiến sĩ">Tiến sĩ</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Trường học</label>
          <input
            type="text"
            placeholder="Nhập tên trường"
            value={filters.school}
            onChange={(e) => handleFilterChange('school', e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label>Mức lương</label>
          <select
            value={filters.salary}
            onChange={(e) => handleFilterChange('salary', e.target.value)}
          >
            <option value="">Chọn mức lương</option>
            <option value="<200000">&lt; 200.000 VND</option>
            <option value="200000-500000">200.000 - 500.000 VND</option>
            <option value=">500000">&gt; 500.000 VND</option>
          </select>
        </div>
        <button className="search-button" onClick={handleSearch}>
          <span role="img" aria-label="search">🔍</span> Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
