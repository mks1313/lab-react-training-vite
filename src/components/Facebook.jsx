import { useState } from "react";
import profiles from "../data/berlin.json";
import "../Facebook.css";

function Facebook() {
  const [country, setCountry] = useState("All");
  const [showAllCountries, setShowAllCountries] = useState(false);

  const buttonsArray = [...new Set(profiles.map((profile) => profile.country))];

  const changeBackground = (profile) => {
    return country === profile.country || country === "All"
      ? "LightSkyBlue"
      : "white";
  };

  const visibleCountries = showAllCountries
    ? buttonsArray
    : buttonsArray.slice(0, 7);

  return (
    <div className="Facebook">
      <ul className="navStyle">
        <li>
          <button
            style={{
              backgroundColor: country === "All" ? "LightSkyBlue" : "white",
            }}
            onClick={() => setCountry("All")}
          >
            All
          </button>
        </li>
        {visibleCountries.map((countryName, index) => (
          <li key={index + countryName}>
            <button
              style={{
                backgroundColor:
                  country === countryName ? "LightSkyBlue" : "white",
              }}
              onClick={() => setCountry(countryName)}
            >
              {countryName}
            </button>
          </li>
        ))}
        {buttonsArray.length > 7 && (
          <li>
            <button onClick={() => setShowAllCountries(!showAllCountries)}>
              ...
            </button>
          </li>
        )}
      </ul>

      <div className="profilesContainer">
        {profiles.map((profile) => (
          <div
            className="divStyles"
            style={{ backgroundColor: changeBackground(profile) }}
            key={profile.img}
          >
            <img
              style={{ width: "50%", height: "auto" }}
              src={profile.img}
              alt={profile.lastName + " picture"}
            />

            <ul>
              <li>
                <b>First name: </b> {profile.firstName}
              </li>
              <li>
                <b>Last name: </b> {profile.lastName}
              </li>
              <li>
                <b>Country: </b> {profile.country}
              </li>
              <li>
                <b>Type: </b> {profile.isStudent ? "student" : "teacher"}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facebook;
