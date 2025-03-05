import React from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/SignUpPage');
  };
  return (
    <div className='container'>
      <div className="left-tab"></div>
      <div className='content'>
      <div className="ku-logo"></div>
      <div className="bottom-tab"></div>
      <div className='title'>KU ComSci Graduate’s Check</div>
      </div>
      <div className='login'>
      <div className='title2'>เข้าสู่ระบบตรวจสอบหน่วยกิตและเช็คจบ</div>
      <div className='email-title'>Email</div>
      <input type="email" id="email" placeholder="abc@ku.th" className="email-input" />
      <div className='password-title'>Password</div>
      <input type="password" id="password" placeholder="1234abcd" className="password-input" />
      <button className='signin-button'>เข้าสู่ระบบ</button>
      <div className="link" onClick={handleSignUp}>สมัครสมาชิกด้วยบัญชีKU</div>
      </div>
      <div className="right-tab"></div>
    </div>
  );
}

export default LoginPage;
