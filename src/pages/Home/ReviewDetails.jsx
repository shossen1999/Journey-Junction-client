import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ReviewDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [review,setReview] = useState({});
  

    useEffect(() =>{
        fetch(`http://localhost:5000/review/${id}`)
        .then(res => res.json())
        .then(data => {
            setReview(data)
            console.log(data);
        })
    },[id])
    return (
        <div>
        {/* <Helmet>
            <title>Estate Details</title>
        </Helmet> */}
        
            <div className="flex flex-col md:flex-row lg:flex-row gap-5">

                <div className="w-full md:w-[40%] lg:w-[40%]" >
                    <img className="p-5 rounded-[20px] h-[500px] w-full" data-aos="right"  src={review.photo} alt="" />
                </div>
                <div className="p-10 md:p-5 w-full md:w-[60%] lg:w-[60%] lg:p-5  flex flex-col space-y-2 " data-aos="fade-left">
                    <h2 className="text-3xl font-bold">Country Name :{review.country_name}</h2>
                    
                    <p className="text-[18px] "><span className="font-bold text-[16px]">User Name: </span>{review.name}</p>
                    <p><span className="font-bold text-[16px]">Comment: </span> {review.comment}</p>
                   

                    

                   
                  
                   
                    <Link to="/"><button className="btn btn-primary">Go Back to Home</button></Link>
                </div>
            </div>
        
    </div>
    );
};

export default ReviewDetails;