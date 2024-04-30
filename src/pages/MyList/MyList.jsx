import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const MyList = () => {
    const { user } = useAuth();
    const tourCart = useLoaderData();
    const [myListCart, setMyListCart] = useState(tourCart);

    const handleUpdate = (spotId) => {
        console.log("Update spot with ID:", spotId);
    };

    const handleDelete = (id) => {
        console.log("Delete spot with ID:", id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://journey-junction-server-gamma.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        // Remove the deleted item from myListCart state
                        const updatedList = myListCart.filter(cart => cart._id !== id);
                        setMyListCart(updatedList);
                    }
                })
                .catch(error => {
                    console.error("Error deleting item:", error);
                });
            }
        });
    };
    const rowColors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fcedd8", "#f4d7da"];
    return (
        <div>
            <h2>My List: {tourCart.length}</h2>
            <div className="overflow-x-auto py-6 md:py-12 lg:py-12" style={{backgroundColor: "#f0f0f0" }}>
                <table className="table table-xs " style={{ width: "100%", margin: 0 }}>
                    <thead>
                        <tr style={{color:"black"}}>
                            <th></th>
                            <th>Tourist Spot Name</th>
                            <th>Country</th>
                            <th>Location</th>
                            <th>Average Cost</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myListCart.map((spot, index) => (
                            <tr key={spot._id} style={{color:"black",padding:"5px 0px",backgroundColor: rowColors[index % rowColors.length]}}>
                                <td>{index + 1}</td>
                                <td>{spot.tourists_spot_name}</td>
                                <td>{spot.country_name}</td>
                                <td>{spot.location}</td>
                                <td>{spot.average_cost}</td>
                                <td>
                                   <Link to={`/updateSpot/${spot._id}`}>
                                   <button 
                                   
                                   className="border-none rounded-[8px] py-2 px-2 bg-green-500 text-black font-medium" onClick={() => handleUpdate(spot._id)}>Update</button>
                                   
                                   </Link>
                                </td>
                                <td>
                                    <button className="border-none  rounded-[8px] py-2 px-2 bg-red-600 text-black font-medium" onClick={() => handleDelete(spot._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr style={{color:"black"}}>
                            <th></th>
                            <th>Tourist Spot Name</th>
                            <th>Country</th>
                            <th>Location</th>
                            <th>Average Cost</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyList;