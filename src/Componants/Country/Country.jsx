import { useState } from "react";
import "./Country.css"

const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country);
    const { name, flags, capital, languages, cca3 } = country
    const [visited, setVisited] = useState(false)
    const handlerClick = () => {
        setVisited(!visited)
    }

    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? "visited" : "non-visited"}`}>
            <h3 style={{ color: visited ? "red" : "black" }}>{name.common}</h3>
            {/* <h3 className={`country ${visited ? "text-color" : "none-color"}`}>{name.common}</h3> */}
            <img src={flags.png} alt="" />
            <p>{capital}</p>
            {/* <img src={coatOfArms.svg} alt="" /> */}
            <h1>{languages?.eng}</h1>
            <h1><small>Code: {cca3}</small></h1>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handlerClick}>{visited ? "visited" : "Going"}</button>
            {
                visited ? "i have visited" : "I want visited"
            }
        </div>
    );
};

export default Country;