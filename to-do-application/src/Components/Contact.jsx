import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import '../Styles/Contactus.css';

const Contactus = () => {
  return (
    <Container>
      <Row className="contact-us-container">
        <Col>
          <h1 className="contact-heading">Your Suggestions are Precious to Us</h1>
          <p className="contact-description">
            We value your feedback and suggestions to improve our services. Please share your experience and any suggestions you have so that we can consider them to enhance your experience with us.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name" className='label'>Name:</label>
              <input
                type="text"
                id="contactname"
                name="name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className='label'>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className='label'>Message:</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="contact-options">
            {/* Your social icons */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactus;
