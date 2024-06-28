import { useState } from "react";

const beerNames = [
  "Grand Cru Brune",
  "Bière Élevée En Fût De Chêne",
  "Bárbara",
  "La Polissonne",
  "Where The Buffalo Roam",
  "Barley Wine",
  "Nr.10 Barley Wine",
  "La Prima Luna",
  "Hideji Premium Barley Wine",
  "Original Gravity #4",
  "Arran Sleeping Warrior",
  "Bourbon Barrel Aged Stout",
  "Black Shark",
  "Celebrator Doppelbock",
  "Freak Kriek Zero Point Three Feel Free Merry Cherry Beer",
  "Tropic Ale",
  "Vieille Brune /Oud Bruin",
  "Vine Song 5",
  "Bullrock Stout",
  "Weizeneisbock",
  "Heineken",
  "Stella Artois",
  "Corona",
  "Guinness",
  "Carlsberg",
  "Budweiser",
  "Beck’s",
  "Leffe",
  "Hoegaarden",
  "Grolsch",
  "Chimay",
  "Delirium Tremens",
  "Rochefort",
  "Orval",
  "Westvleteren 12",
  "Trappistes Rochefort 10",
  "St-Bernardus Abt 12",
  "Coors Light",
  "Miller Lite",
  "Corona Extra",
  "Aroeira",
  "Double Tempest",
  "Drunken Sailor",
  "Duvel",
  "Pilsner Urquell",
  "Sierra Nevada Pale Ale",
  "Samuel Adams Boston Lager",
  "Kronenbourg 1664",
  "Tsingtao",
  "Asahi Super Dry",
  "Newcastle Brown Ale",
  "Anchor Steam Beer",
  "Blue Moon Belgian White",
  "Chimay Blue",
  "Tripel Karmeliet",
  "La Trappe Quadrupel",
  "Goose Island Bourbon County Stout",
  "Founders All Day IPA",
  "Weihenstephaner Hefeweissbier",
  "Rodenbach Grand Cru",
  "Stone IPA",
  "Lagunitas IPA",
  "Oskar Blues Dale's Pale Ale",
  "Lindemans Framboise",
  "Lindemans Kriek",
  "Lindemans Pecheresse",
  "Lindemans Cassis",
  "Lindemans Gueuze",
  "Lindemans Apple",
];

function BeerFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = beerNames.filter((beer) =>
      beer.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  const handleSuggestionClick = (beer) => {
    setSearchTerm(beer);
    setFilteredBeers([]);
  };

  return (
    <section className="beer-search">
      <input
        type="text"
        placeholder="Rechercher ma bière préferée"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      {searchTerm && (
        <ul className="suggestions-list">
          {filteredBeers.map((beer, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(beer)}
            >
              {beer}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default BeerFilter;
