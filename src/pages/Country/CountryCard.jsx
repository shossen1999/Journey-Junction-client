
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ item }) => {
    const { country_name } = item;
    const navigate = useNavigate();
   

    const handleCountryCard = () => {
        navigate(`/countrySpot/${country_name}`)
    }

    return (
        <div className="card  bg-base-100 shadow-xl mx-10 md:mx-5 lg:mx-5 border border-gray-200">

            <div className="card-body">
                <h2 className="card-title font-bold">
                    tourists_spot_name:  {country_name}</h2>
                <button
                    onClick={() => handleCountryCard(country_name)}
                    className="btn btn-primary">Country Spot</button>


            </div>
        </div>
    );
};

export default CountryCard;