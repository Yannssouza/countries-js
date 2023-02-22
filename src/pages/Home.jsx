import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThumbDetail from "../components/ThumbDetail.jsx";
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="fa-solid fa-sun"></i> Light Mode'
  );

  useEffect(() => {
    {
      getCountries().then(() => {});
    }
  }, []);

  const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    await setCountries(data);
  };

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggleBtn('<i class="fa-solid fa-moon"></i> Dark Mode');
      setMode((current) => !current);
    } else {
      document.documentElement.classList.remove("dark");
      setToggleBtn('<i class="fa-solid fa-sun"></i> Light Mode');
      setMode((current) => !current);
    }
  };

  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await res.json();
    await setCountries(data);
  };

  const filterByRegion = async (region) => {
    if (region === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    await setCountries(data);
  };

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-white">
      <div className="mb-16 w-screen bg-white py-6 px-3 shadow-md dark:bg-neutral-700 dark:text-white">
        <div className="container mx-auto flex">
          <h1 className="text-xl font-bold">Where in the world?</h1>
          <div className="ml-auto font-medium">
            <button
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggleBtn }}
            ></button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-16 flex">
        <i className="fa-solid fa-search z-10 my-auto -mr-9 rounded-md py-5 pr-2 pl-3 text-neutral-400"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-1/3 rounded-md p-2 pl-10 shadow-md dark:bg-neutral-700"
          onChange={(term) => searchCountry(term.target.value)}
        />
        <select
          className="my-2 ml-auto rounded-md p-2 font-medium shadow-md dark:bg-neutral-700"
          onChange={(value) => filterByRegion(value.target.value)}
        >
          <option>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-16">
        {countries.map((country, index) => (
          <Link to={{ pathname: "details", state: country }} key={index}>
            <ThumbDetail
              title={country.name.common}
              image_url={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
