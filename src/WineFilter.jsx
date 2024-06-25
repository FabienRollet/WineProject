import { useState } from "react";

const wineNames = [
  // Alsace
  "Riesling",
  "Gewurztraminer",
  "Pinot Gris",
  "Muscat d'Alsace",
  "Sylvaner",
  "Pinot Blanc",
  "Edelzwicker",
  "Klevener de Heiligenstein",

  // Bourgogne
  "Chablis",
  "Meursault",
  "Puligny-Montrachet",
  "Chassagne-Montrachet",
  "Corton-Charlemagne",
  "Saint-Aubin",
  "Pouilly-Fuissé",
  "Mâcon-Villages",
  "Viré-Clessé",
  "Rully",
  "Mercurey Blanc",
  "Montagny",
  "Saint-Véran",
  "Bourgogne Aligoté",

  // Loire
  "Sancerre",
  "Pouilly-Fumé",
  "Vouvray",
  "Muscadet",
  "Saumur",
  "Chinon Blanc",
  "Quincy",
  "Menetou-Salon",
  "Reuilly",
  "Coteaux du Layon",
  "Savennieres",
  "Touraine",
  "Anjou Blanc",

  // Bordeaux
  "Graves Blanc",
  "Pessac-Léognan",
  "Entre-Deux-Mers",
  "Bordeaux Blanc Sec",
  "Sauternes",
  "Barsac",

  // Rhône
  "Condrieu",
  "Hermitage Blanc",
  "Saint-Joseph Blanc",
  "Châteauneuf-du-Pape Blanc",
  "Côtes du Rhône Blanc",
  "Crozes-Hermitage Blanc",
  "Clairette de Die",

  // Languedoc-Roussillon
  "Picpoul de Pinet",
  "Blanquette de Limoux",
  "Coteaux du Languedoc",
  "Vin de Pays d'Oc Blanc",

  // Provence
  "Cassis Blanc",
  "Bellet Blanc",
  "Côteaux d'Aix-en-Provence Blanc",
  "Bandol Blanc",

  // Jura
  "Vin Jaune",
  "Chardonnay du Jura",
  "Savagnin",

  // Savoie
  "Chignin-Bergeron",
  "Roussette de Savoie",
  "Apremont",
  "Crépy",
  "Seyssel",

  // Sud-Ouest
  "Jurançon",
  "Pacherenc du Vic-Bilh",
  "Gaillac Blanc",
  "Bergerac Blanc",
  "Côtes de Gascogne",
  "Monbazillac",
  "Floc de Gascogne",
];

export default function WineFilter() {
  const [wine, setWine] = useState("");

  const getRandomWine = () => {
    const randomIndex = Math.floor(Math.random() * wineNames.length);
    setWine(wineNames[randomIndex]);
  };
  return (
    <>
      <button onClick={getRandomWine}>Afficher un Vin Aléatoire</button>
      {wine && <p>{wine}</p>}
    </>
  );
}
