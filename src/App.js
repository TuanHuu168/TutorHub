import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import FindTutorPage from './pages/FindTutorPage';
import BecomeTutorPage from './pages/BecomeTutorPage';
import TutorRegisterEducationLevelPage from './pages/TutorRegisterEducationLevelPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RegisterPersonalInfo from './pages/RegisterPersonalInfo';
import RegisterAdvancePersonalInfo from './pages/RegisterAdvancePersonalInfo';
import StudentRegisterInfo from './pages/StudentRegisterInfo';
import TutorRegisterProof from './pages/TutorRegisterProof';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-register-info" element={<RegisterPersonalInfo />} />
        <Route path="/personal-register-advance-info" element={<RegisterAdvancePersonalInfo />} />
        <Route path="/student-register-info" element={<StudentRegisterInfo />} />
        <Route path="/tutor-register-education" element={<TutorRegisterEducationLevelPage />} />
        <Route path="/tutor-register-proof" element={<TutorRegisterProof />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/become-tutor" element={<BecomeTutorPage />} />
        <Route path="/find-tutor" element={<FindTutorPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
