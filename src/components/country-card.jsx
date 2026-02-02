import React from "react"

const CountryCard = ({ country }) => {
  return (
    <div key={country.abbr} className="country-card">
      <img
        src={country.flag}
        alt={country.name}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{country.name}</h2>
    </div>
  )
}

export default CountryCard
