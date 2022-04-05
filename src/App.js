import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import "swiper/css/bundle";
import Slider from './components/slider';
import Offer from './components/offer';

export default function App() {
  return (
    <div className="body mt-5">
      <h1 className="welcome-head text-center">Welcome to our bank</h1>
      <div>
        <Slider />
      </div>
      <div>
        <Offer />
      </div>
    </div>
  );
}
