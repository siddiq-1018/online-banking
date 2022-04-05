import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Swipe from "./swipe";



class Slider extends Component {
  render() {
    return (
      <div>
        <section className='p-4 m-4 card bg-transparent'>
          <Swipe />
        </section>
      </div>
    );
  }
}

export default Slider;
