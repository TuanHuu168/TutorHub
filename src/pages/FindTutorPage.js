import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchFilter from '../components/SearchFilter';
import TutorCard from '../components/TutorCard';
import Pagination from '../components/Pagination';
import SupportCard from '../components/SupportCard';
import '../styles/FindTutorPage.css';

const initialTutors = [
  {
    image: '/assets/become-tutor.png',
    name: 'Nguyễn Văn A',
    isSuperTutor: true,
    rating: 4.3,
    reviews: 22,
    price: 200000,
    subjects: ['Toán', 'Văn'],
    students: { current: 2, total: 15 },
    introLink: '/tutor/1/intro',
    moreLink: '/tutor/1/more',
  },
  {
    image: '/assets/become-tutor.png',
    name: 'Nguyễn Văn B',
    isSuperTutor: true,
    rating: 4.8,
    reviews: 20,
    price: 450000,
    subjects: ['Tiếng Anh', 'Tiếng Pháp'],
    students: { current: 2, total: 6 },
    introLink: '/tutor/1/intro',
    moreLink: '/tutor/1/more',
  },
  {
    image: '/assets/become-tutor.png',
    name: 'Nguyễn Văn C',
    isSuperTutor: true,
    rating: 4.5,
    reviews: 13,
    price: 250000,
    subjects: ['Toán', 'Văn'],
    students: { current: 2, total: 17 },
    introLink: '/tutor/1/intro',
    moreLink: '/tutor/1/more',
  },
  {
    image: '/assets/become-tutor.png',
    name: 'Nguyễn Văn D',
    isSuperTutor: true,
    rating: 4.9,
    reviews: 89,
    price: 550000,
    subjects: ['Toán Cao Cấp', 'Tiếng Đức'],
    students: { current: 2, total: 50 },
    introLink: '/tutor/1/intro',
    moreLink: '/tutor/1/more',
  },
];

const FindTutorPage = () => {
  const [filteredTutors, setFilteredTutors] = useState(initialTutors);
  const [balance, setBalance] = useState(500000); // Khởi tạo balance (500K)

  const handleSearch = (filters) => {
    const { classes, subject, location, time, level, school, salary } = filters;

    const filtered = initialTutors.filter((tutor) => {
      const matchSubject = !subject || tutor.subjects.includes(subject);
      const matchSalary =
        !salary ||
        (salary === '<200000' && tutor.price < 200000) ||
        (salary === '200000-500000' &&
          tutor.price >= 200000 &&
          tutor.price <= 500000) ||
        (salary === '>500000' && tutor.price > 500000);

      return matchSubject && matchSalary;
    });

    setFilteredTutors(filtered);
  };

  const handleRegisterTutor = (price) => {
    if (balance >= price) {
      setBalance((prev) => prev - price); // Trừ tiền
      return true; // Đăng ký thành công
    }
    return false; // Không đủ tiền
  };

  return (
    <div className="find-tutor-page">
      <Navbar username="Nguyễn Văn A" balance={`${balance.toLocaleString()} VNĐ`} />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Tìm gia sư dạy kèm theo chương trình học phù hợp với bạn</h1>
          <img src="/assets/find-tutor.png" alt="Find Tutor" className="hero-image" />
        </div>
      </section>

      <SearchFilter onSearch={handleSearch} />

      <div className="content-container">
        <section className="tutor-list">
          <h2>{filteredTutors.length} gia sư được tìm thấy</h2>
          {filteredTutors.length > 0 ? (
            filteredTutors.map((tutor, index) => (
              <TutorCard
                key={index}
                image={tutor.image}
                name={tutor.name}
                isSuperTutor={tutor.isSuperTutor}
                rating={tutor.rating}
                reviews={tutor.reviews}
                price={tutor.price}
                subjects={tutor.subjects}
                students={tutor.students}
                introLink={tutor.introLink}
                moreLink={tutor.moreLink}
                onRegister={(price) => handleRegisterTutor(price)} // Truyền callback
              />
            ))
          ) : (
            <p>Không có gia sư nào phù hợp với tiêu chí tìm kiếm.</p>
          )}
          <Pagination currentPage={1} totalPages={Math.ceil(filteredTutors.length / 10)} />
        </section>

        <aside className="support-section">
          <SupportCard />
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default FindTutorPage;
