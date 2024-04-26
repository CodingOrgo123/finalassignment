import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Styles/Home.css';
import todo from '../images/todo.png';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate =useNavigate("");
  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 id="left-head"><span id="plan">Plan</span> your day in your<br /> own way!!!</h1>
          <p id="home-para">
            Take charge of your schedule, streamline your workload, and achieve <br /> more every day with our efficient To-Do app.
          </p>
          <button id="planbtn" className="btn btn-primary" onClick={() => navigate('/task')}>Plan Your Tasks</button>
        </div>
        <div className="col-md-6">
          <img id="todoimg" src={todo} alt="To-Do List Image" className="img-fluid" width="500px"  />
        </div>
      </div>
    </div>
  );
};

export default Home;
