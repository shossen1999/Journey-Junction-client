// image
// b. tourists_spot_name
// c. average_cost
// d. totaVisitorsPerYear
// e. travel_time
// f. seasonality
// g. “View Details” button – will redirect to the “View Details Page

import { Link } from "react-router-dom";

const TouristsSpotCard = ({touristsSpot}) => {
    const {_id, tourists_spot_name,average_cost, seasonality, travel_time, photo,totalVisitorsPerYear}=touristsSpot;
    return (
         <div className="card  bg-base-100 shadow-xl mx-10 md:mx-5 lg:mx-5 border border-gray-200">
        <figure className="px-10 pt-10">
            <img  src={photo} className="rounded-2xl w-full h-[180px]" />
        </figure>
        <div className="card-body">
            <h2 className="card-title font-bold">
            tourists_spot_name:  {tourists_spot_name}</h2>
            <p className="text-[16px]">average_cost : {average_cost}</p>
            <p>
            seasonality : {seasonality}
            </p>
            <p>travel_time : {travel_time}</p>


            <p>totalVisitorsPerYear:{totalVisitorsPerYear}</p>
            <div className="card-actions justify-end">
                <Link to={`/spotDetails/${_id}`} className="btn btn-primary">View Details</Link>
                {/* <button className="btn btn-primary">View Details</button> */}
            </div>
        </div>
    </div>
    );
};

export default TouristsSpotCard;