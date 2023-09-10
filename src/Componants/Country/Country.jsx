import { useState } from "react";
import "./Country.css";
import Countrydetail from '../Countrydetail/Countrydetail';

const Country = ({ country, handleVisitedCountry, handlerVisitedFlag }) => {
    const { name, flags, capital, languages, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const toggleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? "visited" : "non-visited"}`}>
            <h3 style={{ color: visited ? "red" : "black" }}>{name.common}</h3>
            <img src={flags.png} alt={`Flag of ${name.common}`} />
            <p>{capital}</p>
            <p>{languages?.eng}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={toggleVisited}>Mark Visited</button>
            <br /> <br />
            <button onClick={() => handlerVisitedFlag(flags.png)}>visited Flag</button>
            <hr />
            {visited && (
                <Countrydetail
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handlerVisitedFlag={handlerVisitedFlag}
                />
            )}
        </div>
    );
};

export default Country;
