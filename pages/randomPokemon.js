//should display a different single pokemon every time you reload the page
export default function Page({ pokeData }) {
  console.log(pokeData.results);

  return (
    <>
      <h1>Pokemon Random Name</h1>
      <div>{pokeData}</div>
    </>
  );
}
export const getServerSideProps = async () => {
  const pokeName = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokeData = await pokeName.json();
  const resultsArray = pokeData.results;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomPoke = getRandomInt(resultsArray.length);
  const pokemonName = resultsArray[randomPoke]?.name;
  console.log(randomPoke);
  return { props: { pokeData: pokemonName } };
};
