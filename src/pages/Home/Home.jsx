import { useEffect } from "react";
import Country from "../Country/Country";
import SwipperSlider from "./SwipperSlider";
import { Link, useLoaderData } from "react-router-dom";
import HomeSpotCard from "./HomeSpotCard";


const Home = () => {

    const tourSpotCards = useLoaderData();
    const tourSpotCardToShow = tourSpotCards.slice(0, 6);
    // console.log(tourSpotCardToShow);
    return (
        <div>
            <SwipperSlider></SwipperSlider>
            
            <Country></Country>

            <div className="text-center mt-10 mb-10">
                <h1 className="mb-5  font-bold text-3xl">Our Tourist Spots</h1>
                <p className="md:w-[736px] lg:w-[736px] w-[500px] mx-auto">
                    JourneyJunction , an innovative tourism website designed to be your ultimate companion in exploring the world's most captivating destinations. With a user-friendly interface and a wealth of information at your fingertips
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tourSpotCardToShow.map(singleCard => <HomeSpotCard key={singleCard._id} singleCard={singleCard}></HomeSpotCard>)
                }

            </div>
            <div className="flex justify-center items-center my-5 md:my-8 lg:my-8">
                <Link to="/allTouristsSpot">
                    <button className="btn btn-primary max-w-96" style={{ width: "200px" }}>See More</button>
                </Link>
            </div>


        </div>
    );
};

export default Home;