import pandorita from "./pandorita.png"
import './App.css';

function App() {
  return (
    <div className="app">
      <section className="card">
        <section className="card__text">
          <h1>I'm Pandorita</h1>
          <p>And welcome to my page</p>
          <p>I hope you enjoy my art!</p>
        </section>

        <figure className="card__image">
          <img src={pandorita} alt="pandorita" />
        </figure>
      </section>
    </div>
  );
}

export default App;
