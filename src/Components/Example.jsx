import react, {useState, useEffect} from 'react';
const Example = (props) => {
    const [pokemons, setPokemon] = useState([]);
    const [fetched, setFetch] = useState(false);
    useEffect(() => {
        if(fetched){
            fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
        }
        
    }, [fetched]);
    const onClickH = (e) =>{
        e.preventDefault();
        setFetch(true);
    }
    return (
        <div>
            <form>
            <button onClick={onClickH} className="btn btn-secondary btn-lg m-2" type="submit">Fetch Pokemon</button>
            </form>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (
                <div key={index}>
                    <li>{pokemon.name}</li>
                    
                </div>
                    )
            })}
        </div>
    );
}
export default Example;