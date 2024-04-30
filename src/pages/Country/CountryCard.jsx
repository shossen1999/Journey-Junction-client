
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ item }) => {
    const { country_name, photo, short_description } = item;
    const navigate = useNavigate();


    const handleCountryCard = () => {
        navigate(`/countrySpot/${country_name}`)
    }

    return (
      <>
       <Helmet>
            <title>Country |Country Card</title>
            </Helmet>
          <div
            onClick={() => handleCountryCard(country_name)}
            className="w-full md:max-w-xs lg:max-w-xs p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">Quisque</span>
                <h2 className="text-xl font-semibold tracking-wide">Country Name:  {country_name}</h2>
            </div>
            <p className="text-gray-100 dark:text-gray-800">{short_description}.</p>
        </div>
      </>
       
    );
};

export default CountryCard;