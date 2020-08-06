import React from 'react'

const CountryItem = ({country, showInfo, expanded}) => {

    if(expanded){
        return(
            <div>
                <h2>{country.name}</h2>
                <p>capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                
                <h3>Languages</h3>
                <ul>
                    {country.languages.map(language=><li key={language.iso639_2}>{language.name}</li>)}
                </ul>
            </div>
        )
    }

    
    return (
        <li>{country.name} <button onClick={showInfo(country)}>Show info</button></li>
    )
}

export default CountryItem