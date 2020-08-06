import React from 'react'
import CountryItem from './CountryItem'

const CountryList = ({countries, showInfo}) => {

    if(countries.length === 1){
        const country = countries[0]
        return (
            <CountryItem key={country.numericCode} country={country} expanded={true} />
        )
    }

    
    return (
        <ul> 
            {countries.length > 10 ? 'Too many matches.' : countries.map(country=> <CountryItem key={country.numericCode} country={country} showInfo={showInfo} expanded={false}/>)}
        </ul>
    )
}

export default CountryList