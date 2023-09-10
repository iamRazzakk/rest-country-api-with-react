import CountryData from "../CountryData/CountryData";

const Countrydetail = ({ country, handleVisitedCountry, handlerVisitedFlag }) => {

    return (
        <div>
            <h4>Country Detail: </h4> 
            <hr />
            <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handlerVisitedFlag={handlerVisitedFlag}
            ></CountryData>
        </div>
    );
};

export default Countrydetail;