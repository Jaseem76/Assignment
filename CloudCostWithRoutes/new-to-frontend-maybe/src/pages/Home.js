import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">
                Welcome to Cloud Cost Estimator
            </h1>
            <h3 className="home-subtitle">
                Get a quick estimate of the cost for the services you need.
            </h3>

            <p className="home-paragraph">
                Go to <strong>services</strong> to get started
            </p>
        </div>
    );
}

export default Home;
