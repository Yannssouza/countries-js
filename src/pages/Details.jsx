import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="fa-solid fa-sun"></i> Light Mode'
  );

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

  let { state } = useLocation();
  let navigate = useNavigate();
  const goHomeBtn = () => navigate("/");

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-white">
      <div className="mb-8 w-screen bg-white py-6 px-3 shadow-md dark:bg-neutral-700 dark:text-white">
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
      <div className="container mx-auto">
        <button
          className="rounded-lg bg-white px-8 py-2 text-neutral-600 shadow-md dark:bg-neutral-700 dark:text-white"
          onClick={() => goHomeBtn()}
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="container mx-auto flex p-8 pl-0 pr-0">
        <img src={state.flag} className="h-full w-1/2 pr-8" alt={state.name} />
        <div className="p-8 pl-0">
          <h2 className="mb-8 text-2xl font-bold">{state.name}</h2>
          <div className="grid grid-cols-2 gap-x-20 gap-y-4">
            <p>
              Native Name:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.nativeName}
              </span>
            </p>
            <p>
              Population:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.population}
              </span>
            </p>
            <p>
              Region:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.region}
              </span>
            </p>
            <p>
              Sub Region:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.subregion}
              </span>
            </p>
            <p>
              Capital:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.capital}
              </span>
            </p>
            <p>
              Top Level Domain:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.topLevelDomain[0]}
              </span>
            </p>
            <p>
              Currencies:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.currencies.map((cur) => cur.name)}
              </span>
            </p>
            <p>
              Languages:
              <span className="text-sm text-neutral-700 dark:text-neutral-400">
                {state.languages.map((lang) => lang.name + ", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
