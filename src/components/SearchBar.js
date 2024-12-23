const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <select className="search-dropdown">
        <option>Lớp</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <select className="search-dropdown">
        <option>Môn học</option>
        <option>Toán</option>
        <option>Văn</option>
        <option>Lý</option>
      </select>
      <select className="search-dropdown">
        <option>Khu vực</option>
        <option>Hà Nội</option>
        <option>TP Hồ Chí Minh</option>
      </select>
      <input type="text" className="search-input" placeholder="Trình độ, Trường học, Mức lương" />
      <button className="search-button">Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;