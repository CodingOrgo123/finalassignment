// Task1.js

import React from 'react';
import '../Styles/Task1.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import calen from '../images/calendar.png';

const Task1 = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-8">
          <img src={calen} alt="Calendar" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-8">
          <div className="task-container">
            <div className="task-left-content">
              <h1 id="explore">Explore our calendar and organize your schedule!</h1>
              <p id="home-para">
                Manage your tasks, set priorities, and stay productive with our efficient To-Do app. Explore our
                calendar feature to plan your day, week, or month in advance and never miss an important task.
              </p>
              <button className="btn btn-primary">Explore Calendar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1;
