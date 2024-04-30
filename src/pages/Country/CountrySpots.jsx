import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SpotCard from "./SpotCard";


const CountrySpots = () => {
    const [spots, setSpots] = useState([])
    const { country_name } = useParams();
    fetch(`https://journey-junction-server-gamma.vercel.app/countrySpot/${country_name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSpots(data);
        })
    return (
        <div>
            <div className="text-center mt-10 mb-10">
                <h1 className="mb-5  font-bold text-3xl text-center">{country_name} Tourist Spots</h1>
                <p className="md:w-[736px] lg:w-[736px] w-[500px] mx-auto">
                {country_name} offer a captivating glimpse into its culture, history, and natural beauty, ranging from iconic landmarks like historical sites, architectural wonders, and UNESCO World Heritage sites to breathtaking landscapes such as mountains, beaches, and national parks.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>

            <div className="flex justify-center items-center my-5 md:my-8 lg:my-8">
                <Link to="/">
                    <button className="btn btn-primary max-w-96" style={{ width: "200px" }}>Go Back To Home</button>
                </Link>
            </div>

        </div>
    );
};

export default CountrySpots;