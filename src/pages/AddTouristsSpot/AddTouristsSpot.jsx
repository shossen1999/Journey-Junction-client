import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";


const AddTouristsSpot = () => {
    const { user } = useAuth();
    console.log(user);
    const handleAddTouristsSpot = event => {
        event.preventDefault();

        const form = event.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const photo = form.photo.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = form.email.value;
        const name = form.name.value;
        const short_description = form.short_description.value;
        // short_description
        const newTourSpot = { tourists_spot_name, country_name, location, average_cost, seasonality, travel_time, photo, totalVisitorsPerYear, email, name, short_description };
        console.log(newTourSpot);


        // send data to the server 
        fetch('https://journey-junction-server-gamma.vercel.app/tourSpot', {
            method: 'POST',
            // ki dhoroner data send krbo tar jnno headers use krte hoy
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(newTourSpot)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    form.reset();
                }
            })




    }
    return (
        
        
        <div className="bg-[#F4F3F0] p-24">
            <Helmet>
            <title>Add Tourist Spot</title>
            </Helmet>
            <h2 className="text-3xl font-extrabold">Add A Tourist Spot </h2>

            <form onSubmit={handleAddTouristsSpot} className="card-body">
                {/* form row1 */}
                <div className="md:flex gap-5  ">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text ">Tourists Spot Name</span>
                        </label>
                        <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <select className="select select-bordered" name="country_name"  required>
                            <option disabled>Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Cambodia">Cambodia</option>
                        </select>
                    </div>
                </div>

                {/* form row2 */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost </span>
                        </label>
                        <input type="text" name="average_cost" placeholder="Average Cost" className="w-full input input-bordered" required />
                    </div>
                </div>
                {/* form row3 */}
                <div className="md:flex gap-5">
                <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <select className="select select-bordered" name="seasonality"  required>
                            <option disabled>Seasonality</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input type="text" name="travel_time" placeholder="Travel Time" className="w-full input input-bordered" required />
                    </div>
                </div>
                {/* form row4 */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" required />
                    </div>

                </div>
                {/* form row5 */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" readOnly name="email" defaultValue={user?.email} placeholder="User Email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly name="name" placeholder="User Name" className="input input-bordered w-full" required />
                    </div>

                </div>
                {/* form row6 */}
                <div className="">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea name="short_description" placeholder="Short Description" className="input input-bordered w-full" required></textarea>
                    </div>


                </div>

                <input className="btn btn-block bg-black text-white mt-8" type="submit" value="ADD Tourists Spot" />

            </form>
        </div>
    );
};

export default AddTouristsSpot;