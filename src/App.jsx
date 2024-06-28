import BeerFilter from "./BeerFilter";
import WineFilter from "./WineFilter";

function App() {
  return (
    <>
      <header className="header">
        <h1>Vous allez adorer le vin</h1>
        <p>(en meme temps la bière c'est pas fou...)</p>
      </header>
      <main>
      <BeerFilter />
      <img src="src/assets/arrow.png"/>
      <WineFilter />
      </main>
    </>
  );
}

export default App;
