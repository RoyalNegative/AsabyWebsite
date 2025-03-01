import React from "react";

const Home = () => {
  const navigateToShop = () => {
    window.location.href = "/shop";
  };

  return (
      <section className="hero">
        <div className="hero-text-container">
          <h1 className="hero-text">Asaby'ye Hoşgeldiniz!</h1>
          <button className="shopbtn button" onClick={navigateToShop}>Alışverişe Git!</button>
        </div>
      </section>
  );
};

export default Home;