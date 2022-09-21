import bubaImg from "../src/assets/buba.png";
import charmImg from "../src/assets/charm.png";
import squirtleImg from "../src/assets/squirtle.png";

type FotoPokemon = {
  bubassauro: string;
  squirtle: string;
  chamander: string;
};

function App() {
  const fotoPokemon: FotoPokemon = {
    bubassauro: bubaImg,
    squirtle: squirtleImg,
    chamander: charmImg,
  };

  const pokemons = [
    {
      nome: "bubassauro",
      forca: 100,
      tipo: "planta",
    },
    {
      nome: "squirtle",
      forca: 110,
      tipo: "agua",
    },
    {
      nome: "chamander",
      forca: 220,
      tipo: "fogo",
    },
  ];

  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <div>
            <h1>{pokemon.nome}</h1>
            <span>Força: {pokemon.forca}</span>
            <img src={fotoPokemon[pokemon.nome]} />
          </div>
        );
      })}
    </>
  );
}

export default App;
