import React, { useEffect, useState } from 'react';
import SingleReviewCard from './SingleReviewCard';
import { Helmet } from 'react-helmet';

const ReviewCard = () => {
    const [review, setReview] = useState([]);
    // const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/review')
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
                    JourneyJunction , an innovative tourism website designed to be your ultimate companion in exploring the world's most captivating destinations. With a user-friendly interface and a wealth of information at your fingertips
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