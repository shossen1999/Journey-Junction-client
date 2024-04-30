import React, { useEffect, useState } from 'react';
import SingleReviewCard from './SingleReviewCard';
import { Helmet } from 'react-helmet';

const ReviewCard = () => {
    const [review, setReview] = useState([]);
    
// https://journey-junction-server-gamma.vercel.app
    useEffect(() => {
        fetch('https://journey-junction-server-gamma.vercel.app/review')
            .then((res) => res.json())
            .then((data) => {
                setReview(data);
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);
    const  reviewCards= review.slice(0, 6);
    return (
        <div>
            <div className="text-center mt-10 mb-10">
            {/* <Helmet>
            <title></title>
            </Helmet> */}
                <h1 className="mb-5  font-bold text-3xl">Our Reviews</h1>
                <p className="md:w-[736px] lg:w-[736px] w-[500px] mx-auto">
                DiscoveringDestinations stands out as an exceptional resource for travelers, offering unparalleled guidance and insights to enhance their adventures around the world.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {
                    reviewCards?.map(card =><SingleReviewCard key={card._id} card={card}></SingleReviewCard>)
                }

            </div>
            
        </div>
    );
};

export default ReviewCard;