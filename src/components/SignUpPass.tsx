import React, { useState } from 'react';
import './SignUpPass.css';

function SignUpPass() {
  const [role, setRole] = useState("Roles");
  const [isOpen, setIsOpen] = useState(false);
  const roles = ["นิสิต", "ผู้ตรวจสอบหลักฐาน"];
  
  // กำหนด placeholder ตาม role ที่เลือก
  const getPlaceholder = () => {
    if (role === "นิสิต") {
      return "รหัสนิสิต";
    } else if (role === "ผู้ตรวจสอบหลักฐาน") {
      return "key";
    }
    return "";
  };

  return (
    <div className='container'>
      <div className="left-tab"></div>
      <div className='content'>
        <div className="ku-logo"></div>
        <div className="bottom-tab"></div>
        <div className='title'>KU ComSci Graduate’s Check</div>
      </div>
      <div className='signup-password'>
        <div className='title2'>ลงทะเบียนตรวจสอบหน่วยกิตและเช็คจบ</div>
        <div className='password-title'>Password</div>
        <input type="password" id="password" placeholder="1234abcd" className="password-input" />
        <div className='confirm-password-title'>Confirm Password</div>
        <input type="password" id="confirm-password" placeholder="1234abcd" className="confirm-password-input" />
        
        <div className="input-group">
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
              <span>{role}</span>
              <span className="dropdown-icon">▼</span>
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                {roles.map((option) => (
                  <li key={option} onClick={() => { setRole(option); setIsOpen(false); }}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <input type="text" className="id-student-input" placeholder={getPlaceholder()} />
        </div>

        <button className='register-button'>สมัคร</button>
      </div>
      <div className="right-tab"></div>
    </div>
  );
}

export default SignUpPass;
