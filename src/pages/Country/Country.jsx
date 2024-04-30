import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const Country = () => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch('https://journey-junction-server-gamma.vercel.app/country')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountry(data);

            })
    }, [])
    return (
        <div>
            <h2>Country Name:{country.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-4">
                {
                    country.map(item => <CountryCard key={item._id} item={item}></CountryCard>)
                }

            </div>


        </div>
    );
};

export default Country;