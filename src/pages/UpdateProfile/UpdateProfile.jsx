
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";

import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { user } = useAuth();
    const navigate = useNavigate()



    console.log(user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {
        const { fullName, image } = data;


        // reset error 




        // update profile
        updateProfile(user, {
            displayName: fullName,
            photoURL: image
        })
            .then(() => {
                reset();
                navigate('/updateProfile')


            })
            .catch()


    };


    return (
        <div>

            
            <Helmet>
                <title>Update Profile </title>
            </Helmet>
            <h1 className="text-center text-2xl font-bold">Update Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        name="name"
                        placeholder={user.displayName}
                        className="input input-bordered"
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName && <span className="text-red-700">This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="input input-bordered"
                        disabled
                    />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text"
                        name="photo"
                        placeholder={user.photoURL}
                        className="input input-bordered"
                        {...register("image")}
                    />
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>

            </form>


        </div>
    );
};

export default UpdateProfile;