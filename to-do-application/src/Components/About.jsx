import React from 'react';
import { FaTasks } from 'react-icons/fa'; // Import the ToDo icon from react-icons/fa
import '../Styles/About.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const About = () => {
  return (
    <div>
      <section className="aboutus">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="about-content">
                <div className="todo-icon">
                  <FaTasks size={30} /> {/* ToDo list icon */}
                </div>
                <h2 className='aboutchoose'>Why Choose Us</h2>
                <h2>Efficient Task Management with</h2>
                <h2 className='highlight'>To-Do List</h2>
                <p className="description about-content-desc">
                  Our To-Do List app simplifies task management by providing tools to organize tasks, set priorities, and stay productive. With features designed for beginners and experts alike, our app helps users improve their task management skills step by step. Whether you're tackling everyday tasks or complex projects, our app offers a user-friendly interface and real-world problem-solving challenges to enhance your productivity.
                </p>
                <ul className="features-list">
                  <li><span id="taskpan">Task Organization</span>: Arrange tasks into categories and prioritize them for efficient workflow.</li>
                  <li><span id="taskpan">Priority Setting</span>: Mark tasks with different levels of priority to focus on what matters most.</li>
                  <li><span id="taskpan">Due Dates and Reminders</span>: Set deadlines and receive reminders to stay on track with your tasks.</li>
                  <li><span id="taskpan">Task Notes and Descriptions</span>: Add detailed notes and descriptions to tasks for better clarity and context.</li>
                  <li><span id="taskpan">Collaboration</span>: Share tasks with team members and collaborate effectively on projects.</li>
                  <li><span id="taskpan">Progress Tracking</span>: Monitor your progress and achievements with visual progress indicators.</li>
                </ul>
                <p className="about-content-desc">
                  Get started today and experience a smarter way to manage your tasks with our To-Do List app!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
