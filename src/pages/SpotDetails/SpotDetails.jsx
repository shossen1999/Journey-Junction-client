import { Link, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const touristsSpot = useLoaderData();
    const { tourists_spot_name, country_name, location, average_cost, seasonality, travel_time, photo, totalVisitorsPerYear, short_description } = touristsSpot;

    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 bg-gray-200">
            <div className="md:w-[40%] lg:w-[40%]">
                <img className="p-5 rounded-[20px] h-full" src={photo} alt="" />
            </div>
            <div className="p-10 md:p-5 lg:p-5 flex flex-col space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">{tourists_spot_name}</h2>



                <h2 className="card-title">
                    <span className="font-bold">Country Name: </span> {country_name}
                </h2>
                <p className="text-[18px] ">
                    <span className="font-bold text-[16px]">Description: </span>{short_description}
                </p>
                <p><span className="font-bold text-[16px]">Travel Time: </span> {travel_time}</p>
                <p className="text-[18px] ">
                    <span className="font-bold text-[16px]"> Average cost: </span>{average_cost}
                </p>

                <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                        <p className="font-bold">Location: </p>
                    </div>
                    <p>{location}</p>
                </div>

                <div className="flex gap-2 ">
                    <div className="flex items-center gap-2">
                        <p className="font-bold">Seasonality: </p>
                    </div>
                    <p>{seasonality}</p>
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <h4>Total Visitors Per Year:{totalVisitorsPerYear}</h4>
                    </div>
                </div>
                <Link to="/"><button className="btn btn-primary">Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default SpotDetails;
