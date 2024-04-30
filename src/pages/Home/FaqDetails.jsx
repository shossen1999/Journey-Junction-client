import React from 'react';
import img1 from '../../assets/faq.png'
import img2 from '../../assets/Finland.jpg'
const FaqDetails = () => {
    return (
        <section className="my-10">
          
            <div>
                <img src={img2} alt="" className='w-[100%] h-[100%] object-cover max-h-[672px]'/>
            </div>
           

            <div className="container mx-auto lg:px-24 px-8 my-8">
                <div className="hero">
                    <div className="hero-content flex-col lg:gap-24 lg:flex-row">
                        <img src={img1} className="w-3/4 lg:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <div className="join join-vertical w-full">
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">
                                        What are the top three must-visit tourist spots in Bangladesh
                                    </div>
                                    <div className="collapse-content">
                                        <p>The top three must-visit tourist spots  in Bangladesh are Sundorbon,Cox's Bazar and Saint Martin known for their natural beauty.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        Can you recommend any off-the-beaten-path tourist spots that are less crowded but still worth visiting?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Off-the-beaten-path tourist spots like Saint Martin offer serene landscapes and fewer crowds, perfect for travelers seeking tranquility.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        What are the best tourist spots for outdoor activities such as hiking, snorkeling, or wildlife watching?
                                    </div>
                                    <div className="collapse-content">
                                        <p>For outdoor enthusiasts, tourist spots like Penang in Thailand and Phong
                                            Nha Caves in Vietnam offer thrilling adventures like hiking through lush forests and snorkeling in crystal-clear waters.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        Can you provide recommendations for family-friendly tourist spots with activities suitable for children of different ages?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Enjoy family-friendly fun at tourist spots such as  Borobudur Temple located in Indonesia, offering a range of activities like interactive museums and kid-friendly nature trails</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                    What are the best tourist spots for photography enthusiasts looking to capture stunning landscapes or iconic landmarks?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Capture breathtaking landscapes at tourist spots like Cameron Highlands located in Malaysia, renowned for its dramatic scenery and iconic landmarks, perfect for photography enthusiasts</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                    Are there any hidden gems or lesser-known tourist spots that locals love but are not widely advertised?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Discover hidden gems like Siem Reap located in Cambodia, a charming village tucked away in the mountains, favored by locals for its untouched beauty and authenticity.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                    Are there any eco-friendly or sustainable tourism initiatives at tourist spots promoting environmental conservation?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Support eco-friendly tourism initiatives at spots like Penang in Malaysia, where sustainable practices promote environmental conservation and responsible travel.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                    What safety measures are in place at tourist spots, especially for solo travelers or those visiting with young children?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Stay safe while exploring tourist spots with measures like Chiang Mai in Thailand, ensuring peace of mind for solo travelers and families alike.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-6 lg:mt-14 w-[80%] mx-auto border-dashed" />
        </section>
    );
};

export default FaqDetails;