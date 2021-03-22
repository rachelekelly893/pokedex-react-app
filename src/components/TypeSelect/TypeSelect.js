import React from 'react';


const TypeSelect = ({typeFilter, setTypeFilter, handleTypeChange}) => {
    return (
        <select onChange = {handleTypeChange}>
            <option value="">Select Type</option>
            <option value="">All</option>
            <option value="bug">Bug</option>
            <option value="dragon">Dragon</option>
            <option value="fairy">Fairy</option>
            <option value="fire">Fire</option>
            <option value="ghost">Ghost</option>
            <option value="ground">Ground</option>
            <option value="normal">Normal</option>
            <option value="psychic">Psychic</option>
            <option value="steel">Steel</option>
            <option value="dark">Dark</option>
            <option value="electric">Electric</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="grass">Grass</option>
            <option value="ice">Ice</option>
            <option value="poison">Poison</option>
            <option value="rock">Rock</option>
            <option value="water">Water</option>
        </select>
    )
}

export default TypeSelect