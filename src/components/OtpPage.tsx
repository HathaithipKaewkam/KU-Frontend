import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpPage.css';

function OtpPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // รับเฉพาะตัวเลข
    if (value.length > 1) return; // จำกัดให้รับแค่ตัวเดียวต่อช่อง

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // ย้ายโฟกัสไปช่องถัดไป
    if (value && index < 5) {
      const nextInput = document.getElementById(`input${index + 2}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`input${index}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleNext = () => {
    navigate('/SignUpPass');
  };

  return (
    <div className='container'>
      <div className="left-tab"></div>
      <div className='content'>
        <div className="ku-logo"></div>
        <div className="bottom-tab"></div>
        <div className='title'>KU ComSci Graduate’s Check</div>
      </div>
      <div className='otp'>
        <div className='titleOtp'>OTP verification</div>
        <div className="otp-container">
          <div className='otp-input'>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`input${index + 1}`}
                type='text'
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
        </div>
        <button className='next-otp-button' onClick={handleNext}>ถัดไป</button>
      </div>
      <div className="right-tab"></div>
    </div>
  );
}

export default OtpPage;
