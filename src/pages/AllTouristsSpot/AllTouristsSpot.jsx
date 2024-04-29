import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";


const AllTouristsSpot = () => {
    const touristsSpots=useLoaderData();
    return (
        <div>
            <h2>All Tourists Spot: {touristsSpots.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                   touristsSpots.map(touristsSpot => 
                   <TouristsSpotCard
                    key={touristsSpot._id}
                    touristsSpot={touristsSpot}
                   ></TouristsSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;
