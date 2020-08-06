import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/CountryList'

import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries , setFilteredCountries ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')

  const handleSearchChange = (e) => {
    const searchValue = e.target.value
    const countriesFilter = countries.filter(country=>country.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    setFilteredCountries(countriesFilter)
    setNewSearch(searchValue)
  }

  const showInfo = (country) => () => {
    setFilteredCountries([country])
  }


  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=>{
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      Find countries: <input value={newSearch} onChange={handleSearchChange} />

      <CountryList countries={filteredCountries} showInfo={showInfo}/>

    </div>
  );
}

export default App;
