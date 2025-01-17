import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import SignUp from './components/SignUp';
import ContactUs from './contact/ContactUs';

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
