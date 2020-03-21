import React from 'react';
import FA from 'react-fontawesome'
import styles from './search.module.scss';

function Search({ findCountryHandler, searchedCountry, setSearchedCountry,  isFromTable}) {
  return (
    <form className={styles.container}>
      <p>
        <input type="text" placeholder="Search" name="search" value={searchedCountry} onChange={e => setSearchedCountry(e.target.value)} />
      </p>

      <button className={styles.button} onClick={findCountryHandler}><FA name="search" /></button>
    </form>
  )
}

export default Search;