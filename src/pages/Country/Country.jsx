import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const Country = () => {
    const [country,setCountry]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            setCountry(data);

        })
    },[])
    return (
        <div>
            <h2>Country Name:{country.length}</h2>
            {
                country.map(item => <CountryCard key={item._id} item={item}></CountryCard>)
            }
            
        </div>
    );
};

export default Country;