import { useEffect, useState } from "react"
import "./App.css"
import CountryCard from "./components/country-card"

function App() {
  const [countries, setCountries] = useState([])

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://xcountries-backend.labs.crio.do/all",
      )
      const data = await response.json()
      setCountries(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <div className="countries-list">
      {countries.map((country) => (
        <CountryCard key={country.abbr} country={country} />
      ))}
    </div>
  )
}

export default App
