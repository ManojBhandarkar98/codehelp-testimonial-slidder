import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div>
      <div>
        <h1>Our Testimonial</h1>
      </div>
      <Testimonial reviews={reviews}/>
    </div>

  );
};

export default App;
