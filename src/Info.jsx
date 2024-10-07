export default function Info({ name, data }) {
    return (
      data &&
      data.sprites && (
        <>
          <h2>Meet {name}</h2>
          <p>
            <img src={data.sprites.front_shiny} alt="Pokémon Info" />
            <ul>
              {data.moves.map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
          </p>
        </>
      )
    );
  }
  