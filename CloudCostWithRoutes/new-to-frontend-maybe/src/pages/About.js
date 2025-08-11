import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Cloud Cost Estimator</h1>
        <p className="about-text">
          Welcome, traveler. You’ve just landed on the future of cloud budgeting.
          Our platform scans through the hyperspace of pricing data, 
          bends the rules of cost calculation, and delivers you
          an estimate faster than a comet on caffeine.  
        </p>
        <p className="about-text">
          Whether you’re a startup starship or a galactic enterprise, 
          we ensure your cloud journey is efficient, transparent, and light-years ahead of the rest.
        </p>
        <div className="about-highlight">
          <span>Precision</span>
          <span>Speed</span>
          <span>Imagination</span>
        </div>
      </div>
    </div>
  );
}

export default About;
