import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
// import { Helmet } from "react-helmet";


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
            <div className="text-center mt-10 mb-10">
            
                <h1 className="mb-5  font-bold text-3xl">Our Countries</h1>
                <p className="md:w-[736px] lg:w-[736px] w-[500px] mx-auto">
                In this country section, we have compiled a selection of destinations that encapsulate the essence and diversity of each nation, providing a rich tapestry of cultural, historical, and natural wonders for travelers to explore and discover
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-4">
                {
                    country.map(item => <CountryCard key={item._id} item={item}></CountryCard>)
                }

            </div>


        </div>
    );
};

export default Country;