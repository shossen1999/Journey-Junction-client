import { Link } from 'react-router-dom';
import img1 from '../../assets/faq.png'
import { FaArrowRight } from "react-icons/fa";

const FaqQuestion = () => {
    return (
        <section className="my-10">
            <div className="text-start  mx-10 md:mx-28 lg:mx-28 space-y-6">
                <h5 className="text-[#131318] font-extrabold text-4xl">Mostly Asked Questions</h5>
                <Link to="/faq" className="my-4 text-green-700 text-24px font-medium" style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '8px' }}>View The Full FAQ</span>
                    <FaArrowRight />
                </Link>
                {/* <p className="w-[80%] justify-center lg:w-[50%] mx-auto text-[#13131899] font-medium text-lg">
                    All the battlegrounds, skates carve stories in the ice's embrace, where the clash of sticks and thunderous slapshots paint the canvas of competition.
                </p> */}
            </div>

            <hr className="mb-2 mt-8 w-[80%] mx-auto border-dashed" />

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-6 lg:mt-14 w-[80%] mx-auto border-dashed" />
        </section>
    );
};

export default FaqQuestion;