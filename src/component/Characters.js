import React from 'react';
import { useCharacters } from '../hooks/useCharacters';

export default function Characters() {
    const {error,data,loading} = useCharacters();
    if(error) return <div>error</div>
    if(loading) return <div>loading</div>
    return (
        <div className="characters">
            {data.characters.results.map(character=> {
                return(
                    <div>
                    {character.id} - {character.name}<br/>
                    <img src={character.image}/>

                    </div>
                )
            })}
        </div>
    )
}
