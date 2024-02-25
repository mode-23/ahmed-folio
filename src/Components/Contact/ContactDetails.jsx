import React from 'react'

const ContactDetails = () => {
  return (
    <div className="contact_details">
        <h3 className='title_contact'>Get in touch</h3>
        <div className="contact_info_box">
          <h4>write me</h4>
          <div className="df">
          <a href="mailto:ahmedbkd.258@gmail.com" className='main_link'>ahmedbkd.258@gmail.com</a>
          </div>
        </div>
        <div className="contact_info_box">
          <h4>call me</h4>
          <div className="df">
          <a href="tel:+21656627517" className='main_link'>(+216) 56-627-517</a>
          </div>
        </div>
        <div className="contact_info_box">
          <h4>follow me</h4>
          <div className="df">
          <a href="https://www.facebook.com/profile.php?id=100004692168583" target='_blank' className='main_link'>Facebook</a>
          <a href="https://www.facebook.com/profile.php?id=100004692168583" target='_blank' className='main_link'>Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100004692168583" target='_blank' className='main_link'>LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=100004692168583" target='_blank' className='main_link'>Twitter</a>
          </div>
        </div>
    </div>
  )
}

export default ContactDetails