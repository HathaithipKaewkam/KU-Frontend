import React from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();
  
    const handleNext = () => {
      navigate('/OtpPage');
    };
  return (
    <div className='container'>
      <div className="left-tab"></div>

      <div className='content'>
        <div className="ku-logo"></div>
        <div className="bottom-tab"></div>
        <div className='title'>KU ComSci Graduate’s Check</div>
      </div>

      <div className='signup-page'>
        <div className='title2'>ลงทะเบียนตรวจสอบหน่วยกิตและเช็คจบ</div>
        <div className='email-title-signup'>Email (@ku)</div>
        
        <div className='input-container'>
          <input type="email" id="email" placeholder="abc@ku.th" className="email-input" />
          <div className="checkbox-container">
            <input type="checkbox" id="agree" />
          </div>
        </div>

        <button className='next-signup-button' onClick={handleNext}>ถัดไป</button>
      </div>

      <div className="right-tab"></div>
    </div>
  );
}

export default SignUpPage;
