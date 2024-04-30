import { useState } from "react";
import { useParams } from "react-router-dom";
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
            <h2>Hi </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>

        </div>
    );
};

export default CountrySpots;