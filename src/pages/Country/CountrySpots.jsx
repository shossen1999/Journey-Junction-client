import { useState } from "react";
import { useParams } from "react-router-dom";
import SpotCard from "./SpotCard";


const CountrySpots = () => {
    const [spots,setSpots]=useState([])
    const {country_name}=useParams();
    fetch(`http://localhost:5000/countrySpot/${country_name}`)
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        setSpots(data);
    })
    return (
        <div>
            <h2>Hi </h2>
            {
                spots.map(spot=><SpotCard key={spot._id} spot={spot}></SpotCard>)
            }

            
        </div>
    );
};

export default CountrySpots;