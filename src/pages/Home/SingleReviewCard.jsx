import React from 'react';
import { Link } from 'react-router-dom';

const SingleReviewCard = ({ card }) => {
    const {_id, name, country_name, photo, comment } = card;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl" >
        <figure className="h-[300px]"><img src={photo} className="w-full" /></figure>
        <div className="card-body">
            <h2 className="card-title">User name : {name}</h2>
            <h2 className="card-title">Country Name : {country_name}</h2>
            {
                comment.length > 100 ? 
                <p>{comment.slice(0,100)}
                <Link to={`/review/${_id}`} 
                className="text-blue-800 ml-1 font-bold ">
                    Read More....</Link>
                </p>
                :
                <p>{comment}</p>
               

            }
            
            
        </div>
    </div>
    
    );
};

export default SingleReviewCard;