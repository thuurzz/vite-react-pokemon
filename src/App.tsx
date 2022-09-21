import bubaImg from "../src/assets/buba.png";
import charmImg from "../src/assets/charm.png";
import squirtleImg from "../src/assets/squirtle.png";
import { Container } from "./assets/App";

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
      id: 1,
      nome: "bubassauro",
      forca: 100,
      tipo: "planta",
    },
    {
      id: 2,
      nome: "squirtle",
      forca: 110,
      tipo: "agua",
    },
    {
      id: 3,
      nome: "chamander",
      forca: 220,
      tipo: "fogo",
    },
  ];

  return (
    <ul>
      {pokemons.map((pokemon) => {
        return (
          <li key={pokemon.id}>
            <Container>
              <h2>{pokemon.nome}</h2>
              <span>Força: {pokemon.forca}</span>
              <img src={fotoPokemon[pokemon.nome]} />
            </Container>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
