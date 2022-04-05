import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import "swiper/css/bundle";
import Slider from './components/slider';

export default function App() {
  return (
    <div className="body">
      <h1 className="text-center">Welcome to our bank</h1>
      <div>
        <Slider />
      </div>
      <div className="card m-4 p-4 bg-transparent">
        <h2 className="text-center">
          Enjoy the best benefits with NESLA savings bank account
        </h2>
        <div className="container m-4">
          <div className="row d-flex justify-content-between">
            <div className="bg-transparent col-3 p-2">
              <div className="card card-bg">
                <h2>8%</h2> <span>interest rate* p.a.</span>
              </div>
            </div>
            <div className=" bg-transparent col-3 p-2">
              <div className="card card-bg">
                <h2>₹2Cr</h2> <span>Air Accidental Insurance Cover</span>
              </div>
            </div>
            <div className="bg-transparent col-3 p-2">
              <div className="card card-bg">
                <h2>₹40L</h2> <span>Personal Accidental Insurance Cover</span>
              </div>
            </div>
            <div className="bg-transparent col-3 p-2">
              <div className="card card-bg">
                <h2>₹500</h2>
                <span>Cashback on your first debit card transaction*</span>
              </div>
            </div>
            <div className="mt-4 p-2 text-center">
              <button className="btn btn-primary">Know more..</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
