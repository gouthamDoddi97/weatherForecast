import { BsFillGeoAltFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, type FormEvent } from "react";
import { useWeather } from "../../context/useWeather";

function Header() {
  const { weather, isLoading, error, searchLocation } = useWeather();
  const [query, setQuery] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void searchLocation(query);
    setQuery("");
  };

  return (
    <header className="app-header relative">
      <div className="location-block">
        <BsFillGeoAltFill className="location-pin" aria-hidden="true" />
        <div className="location-copy">
          <h1 className="location-title">{weather ? `${weather.city}${weather.region ? `, ${weather.region}` : ""}` : "Local forecast"}</h1>
          <p className="location-date">{weather ? `${weather.country} · ${weather.date}` : isLoading ? "Getting the latest conditions" : "Forecast unavailable"}</p>
        </div>
      </div>

      <div className="header-actions">
      <form onSubmit={handleSearch} className="search-form" id="location-search">
        <input
          aria-label="Search city"
          className="search-input"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a city"
          value={query}
        />
        <button className="search-button" aria-label="Search city" disabled={isLoading} type="submit">
          <FaMagnifyingGlass aria-hidden="true" />
        </button>
      </form>
      <span className={`service-status${isLoading ? " is-loading" : ""}${error ? " is-error" : ""}`} aria-label={error ?? "Weather service status"}>{error ? "Unavailable" : isLoading ? "Updating" : "Live"}</span>
      </div>
      {error && <p role="alert" className="search-error">{error}</p>}
    </header>
  )
}

export default Header
