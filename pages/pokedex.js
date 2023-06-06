//should display up to 10 Pokemon from the pokeapi and include their names.
//fetch statically
export default function Page({ results }) {
  let pokeName = results[0]?.name;
  return (
    <div>
      <h1>Pokemon Names</h1>
      {results.map((poke, index) => {
        const pokemonName = results[index]?.name;
        return (
          <>
            <li>{pokemonName}</li>
          </>
        );
      })}
    </div>
  );
}
//TODO: add map to list out pokemon names
export const getStaticProps = async () => {
  const pokemonNames = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const nameData = await pokemonNames.json();
  console.log(pokemonNames.results);
  return { props: { results: nameData.results } };
};
