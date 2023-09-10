import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisitedCountry = country => {
        console.log("add visited you visit this country");
        // visitedCountry.push(country)
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
        console.log(country);
    }

    return (
        <div>
            <h2>Countries :{countries.length}</h2>
            <div>
                <h1>Visited Countries: {visitedCountry.length}</h1>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries">
                {
                    countries.map(contry => <Country
                        key={Country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={contry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;