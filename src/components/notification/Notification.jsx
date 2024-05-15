import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './notification.css';
import React from 'react'

const Notification=()=> {
  return (
    <div className=''>
      <ToastContainer position='bottom-right' />
    </div>
  )
}

export default Notification;
