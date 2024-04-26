import React from 'react';
import '../Styles/Footer.css';

const quickLinks = [
  {
    path: "/",
    display: "Home"
  },
  {
    path: "/task",
    display: "Manage Task"
  },
  
  {
    path: "/ranks",
    display: "Aboutus"
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer_logo">
              <h2>TaskPlan</h2>
              <p className="description">Manage and Organize your Tasks</p>
              <p className="small_text description">TaskPlan helps you  to manage and organize your task.priorities your important worksand set Remainders</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer_quick-links">
              <div className="quick_link-title">Solutions</div>
              <ul className="quick-links">
                {quickLinks.map((item, index) => (
                  <li key={index} className="quick-link-item">
                    <a href={item.path} className="quick-link-items">{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer_contact-info">
              <div className="contact-info-title">Contact Us</div>
              <p>Email: info@TaskPlan.com</p>
              <p>Phone: +1 123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
