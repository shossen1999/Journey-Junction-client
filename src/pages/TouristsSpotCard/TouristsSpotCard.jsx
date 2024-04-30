// image
// b. tourists_spot_name
// c. average_cost
// d. totaVisitorsPerYear
// e. travel_time
// f. seasonality
// g. “View Details” button – will redirect to the “View Details Page

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TouristsSpotCard = ({ touristsSpot }) => {
    const { _id, tourists_spot_name, average_cost, seasonality, travel_time, photo, totalVisitorsPerYear } = touristsSpot;
    return (
        <div className="card  bg-base-100 shadow-xl mx-10 md:mx-5 lg:mx-5 border border-gray-200">
             <Helmet>
            <title>Tourist Spot</title>
            </Helmet>
            <figure className="px-10 pt-10">
                <img src={photo} className="rounded-2xl w-full h-[180px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">
                    <span className="font-bold ">Tourists Spot Name: </span>  {tourists_spot_name}</h2>
                <p className="text-[14px]"><span className="font-bold ">Average cost : </span> {average_cost}</p>
                <p className="text-[14px]">
                    <span className="font-bold ">Seasonality : </span> {seasonality}
                </p>
                <p className="text-[14px]"><span className="font-bold ">Travel time :</span> {travel_time}</p>


                <p className="text-[14px]"><span className="font-bold ">Total Visitors Per Year : </span>{totalVisitorsPerYear}</p>
                <div className="card-actions justify-end">
                    <Link to={`/spotDetails/${_id}`} className="btn btn-primary">View Details</Link>
                    {/* <button className="btn btn-primary">View Details</button> */}
                </div>
            </div>
        </div>
    );
};

export default TouristsSpotCard;