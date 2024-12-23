const TutorList = () => {
  const tutors = [
    { name: 'Tên', rating: 5, price: '200.000VND', description: 'Đang dạy 2 học viên - Đã dạy 10 học viên', link: '#' },
    { name: 'Tên', rating: 5, price: '200.000VND', description: 'Đang dạy 2 học viên - Đã dạy 10 học viên', link: '#' },
    { name: 'Tên', rating: 5, price: '200.000VND', description: 'Đang dạy 2 học viên - Đã dạy 10 học viên', link: '#' },
    { name: 'Tên', rating: 5, price: '200.000VND', description: 'Đang dạy 2 học viên - Đã dạy 10 học viên', link: '#' },
  ];

  return (
    <section className="tutor-list">
      <h2>233 gia sư được tìm thấy</h2>
      {tutors.map((tutor, index) => (
        <div key={index} className="tutor-card">
          <div className="tutor-details">
            <h3>{tutor.name}</h3>
            <p>{tutor.description}</p>
            <span>⭐ {tutor.rating}</span>
          </div>
          <div className="tutor-price">
            <p>{tutor.price}</p>
            <button className="contact-button">Liên hệ</button>
          </div>
        </div>
      ))}
      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>...</span>
        <span>47</span>
      </div>
    </section>
  );
};

export default TutorList;