import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import "swiper/css/bundle";
import Slider from './components/slider';
import Offer from './components/offer';
// import Graph from './components/graph';
import Contactus from './components/contactus';
import Complaints from './components/complaints';
import Login from './components/login';
import Newreg from './components/newreg';

export default function App() {
  return (
    <div className="body mt-5">
      <div>
        <Login />
      </div>
      <div>
        <Newreg />
      </div>
      <h1 className="welcome-head text-center">Welcome to our bank</h1>
      <div>
        <Slider />
      </div>
      <div>
        <Offer />
      </div>
      <div >
        <Contactus/>
      </div>
      <div >
        <Complaints/>
      </div>
    </div>
  );
}
